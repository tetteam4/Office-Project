import React, { useState, useEffect } from "react";
import axios from "axios";

const AttendanceMarking = () => {
  const [users, setUsers] = useState([]); // Store all users
  const [todayRec, setTodayRec] = useState([]); // Store today's attendance records
  const [filteredUsers, setFilteredUsers] = useState([]); // Users who haven't marked attendance
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch today's attendance records
  const fetchTodayRec = async () => {
    try {
      const response = await axios.get("http://localhost:9000/attendance/todayRec");
      setTodayRec(response.data.records || []); // Ensure it sets an array
    } catch (err) {
      console.error("Error fetching today's records:", err);
      setError("Failed to fetch today's attendance records.");
    }
  };

  // Function to fetch users from the database
  const fetchMembers = async () => {
    try {
      const response = await axios.get("http://localhost:9000/member");
      setUsers(response.data.data || []); // Ensure it sets an array
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  // Remove users who already have an attendance record today
  useEffect(() => {
    if (users.length === 0) return; // If users are empty, do nothing

    if (todayRec.length > 0) {
      setFilteredUsers(users.filter((user) => 
        !todayRec.some((record) => record.name === user.fullName)
      ));
    } else {
      setFilteredUsers(users); // If todayRec is empty, show all users
    }
  }, [users, todayRec]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchMembers(), fetchTodayRec()]); // Fetch both API calls in parallel
      setLoading(false);
    };
    fetchData();
  }, []);

  // Mark attendance as "Present" or "Absent"
  const markAttendance = async (name, status) => {
    try {
      await axios.post("http://localhost:9000/attendance/", {
        name,
        status,
      });

      // Update today's records after marking attendance
      setTodayRec((prev) => [...prev, { name, status }]);

      // Remove the marked user from the filtered list
      setFilteredUsers((prevUsers) => prevUsers.filter((user) => user.fullName !== name));
      
      console.log(`${name} marked as ${status}`);
    } catch (error) {
      console.error(`Failed to mark ${status} for user ${name}:`, error.response?.data || error);
    }
  };

  if (loading) return <div>Loading users...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">User ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">{user.fullName}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                    onClick={() => markAttendance(user.fullName, "Present")}
                  >
                    Present
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => markAttendance(user.fullName, "Absent")}
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-500">
                No users available for attendance.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceMarking;

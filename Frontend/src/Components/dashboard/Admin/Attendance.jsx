import React, { useState, useEffect } from "react";
import axios from "axios";

const AttendanceMarking = () => {
  const [users, setUsers] = useState([
    { "id": 1, "name": "John Doe" },
    { "id": 2, "name": "Jane Smith" }
  ]); // State to store user list
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch users from the database
  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:9000/member");
        setUsers(res.data.data);
        console.log(res.data.data);
        
      } catch (error) {
        console.error("Error fetching members:", error);
      }
      setLoading(false);
    };
    fetchMembers();
  }, []);

  // Mark attendance as "Present" or "Absent"
  const markAttendance = async (name, status) => {
    try {
      const response = await axios.post('http://localhost:9000/attendance/', {
        name: name,
        status: status,
      });
      console.log('Attendance marked successfully:', response.data);
    } catch (error) {
      console.error(`Failed to mark ${status} for user ${name}:`, error.response?.data || error);
    }
  };
  

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
          {users.map((user) => (
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
                  onClick={() => markAttendance(user.id, "Absent")}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceMarking;

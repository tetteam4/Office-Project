import React, { useState } from "react";

const UserProfileUpdate = ({ user, token, profileOpen, setProfileOpen }) => {
  const [formData, setFormData] = useState({
    email: user?.email || "",
    fullName: user?.fullName || "",
    password: "",
    repassword: "",
    role: user?.role || "",
    entryDate: user?.entryDate || "",
    skills: user?.skills || "",
    contacts: user?.contacts || "",
    profile: null,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch(
        `http://localhost:8000/users/update/${user?.id}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Error updating profile.");
        return;
      }

      const updatedData = await response.json();
      console.log("Update successful:", updatedData);
      setProfileOpen(false);
    } catch (err) {
      setError("An error occurred while updating the profile.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!profileOpen) return null;

  return (
    <div className="fixed inset-0 overflow-x-scroll flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="p-6 bg-white rounded shadow-lg w-full max-w-md">
        <form onSubmit={handleUpdate} className="space-y-4">
          <h2 className="text-xl font-bold text-center">Update Profile</h2>
          {error && <p className="text-red-500">{error}</p>}
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-bold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Enter your Full Name"
                required
              />
            </div>

            {/* Password Fields */}
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <label htmlFor="repassword" className="block text-sm font-bold text-gray-700">
                Re-enter Password
              </label>
              <input
                type="password"
                id="repassword"
                name="repassword"
                value={formData.repassword}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Re-enter your password"
                required
              />
            </div>

            {/* Role and Entry Date Fields */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="role" className="block text-sm font-bold text-gray-700">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                  placeholder="Enter role"
                />
              </div>
              <div>
                <label htmlFor="entryDate" className="block text-sm font-bold text-gray-700">
                  Entry Date
                </label>
                <input
                  type="date"
                  id="entryDate"
                  name="entryDate"
                  value={formData.entryDate}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            {/* Skills and Contacts Fields */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="skills" className="block text-sm font-bold text-gray-700">
                  Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                  placeholder="Enter skills"
                />
              </div>
              <div>
                <label htmlFor="contacts" className="block text-sm font-bold text-gray-700">
                  Contacts
                </label>
                <input
                  type="text"
                  id="contacts"
                  name="contacts"
                  value={formData.contacts}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                  placeholder="Enter contacts"
                />
              </div>
            </div>

            {/* Profile Picture Upload */}
            <div>
              <label htmlFor="profile" className="block text-sm font-bold text-gray-700">
                Profile Picture
              </label>
              <input
                type="file"
                id="profile"
                name="profile"
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </button>
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setProfileOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileUpdate;

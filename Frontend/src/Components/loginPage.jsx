// src/Components/LoginPage.jsx
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiUserMinus } from "react-icons/fi";
import { MdOutlineLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/member/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = response.statusText;
      localStorage.setItem("token", response.data.token);

      if (data == "OK") {
        // Redirect to dashboard or home page
        navigate("/dashboard"); // Pass decodedToken to the dashboard
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className=" h-screen w-full flex items-center justify-center">
      <div className="flex items-center w-auto justify-center  p-6 bg-gray-400 shadow-lg rounded-lg">
        <div className=" space-y-4 ">
          {/* User Icon */}
          <div className="    flex justify-center">
            <div className="bg-white  text-gray-700 p-4 rounded-full ">
              <FaUser size={50} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
            Login
          </h2>
          <form onSubmit={handleLogin} className="">
            {/* Email Field */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <span className="absolute top-8 right-3 text-gray-400">
                <FiMail size={20} />
              </span>
            </div>

            {/* Password Field */}
            <div className="relative mb-3">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                autoComplete="current-password"
              />
              <span className="absolute top-8 right-3 text-gray-400">
                <MdOutlineLock size={20} />
              </span>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <button
              onClick={() => navigate("/forgot-password")}
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

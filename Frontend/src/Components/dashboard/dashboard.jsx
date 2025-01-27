import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiMoneyStack } from "react-icons/gi";
import { jwtDecode } from "jwt-decode";
import IncomeManager from "./Admin/Income.jsx";

import {
  FaSun,
  FaMoon,
  FaBars,
  FaSignOutAlt,
  FaUserFriends,
  FaEnvelope,
} from "react-icons/fa";

import MemberManagement from "./Admin/memberManagement";
import VerifiedMessages from "./Admin/verifiedMessages";
import ExpenseManager from "./Admin/expense.jsx";
import WelcomeDashboard from "./WelcomeDashboard.jsx";
import UserProfileUpdate from "./UserProfileUpdate.jsx";
import AttendanceGraph from "./attendencePage.jsx";
import { ClipboardCheck } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  // Fetch and decode token
  const token = localStorage.getItem("token");
  const [user, setUser] = useState();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [userImage, setUserImage] = useState(null);

  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser(JSON.stringify(decodedToken));
        // localStorage.setItem("name", JSON.stringify(decodedToken.fullName));
      } catch (error) {
        console.error("Invalid token, logging out.", error);
        handleLogout();
      }
    }
  }, [token]);

  // Redirect to login if no user
  const [formData, setFormData] = useState(() => {
    // Use a function to initialize state to handle user being null initially
    return {
      email: user?.email || "guest", // Default to "guest" if no email
      fullName: user?.fullName || "", // Default to empty string
      password: "", // Empty string for new password
      repassword: "", // Empty string for confirmation password
      profile: null, // Null for profile picture initially
      role: user?.role || "", // Default to empty string if no role
      entryDate: user?.entryDate || "", // Default to empty string for entry date
      skills: user?.skills || "", // Default to empty string for skills
      contacts: user?.contacts || "", // Default to empty string for contacts
    };
  });

  // Update formData dynamically if the user state changes
  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        email: user.email || "guest",
        fullName: user.fullName || "",
        role: user.role || "",
        entryDate: user.entryDate || "",
        skills: user.skills || "",
        contacts: user.contacts || "",
      }));
    }
  }, [user]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("welcomeDashborad");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle profile update
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
    } catch (err) {
      setError("An error occurred while updating the profile.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  // Handle sidebar toggle
  const handleMobileSidebarToggle = () =>
    setIsMobileSidebarOpen(!isMobileSidebarOpen);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("user");
    navigate("/login");
  };

  // Render active component
  const renderContent = () => {
    switch (activeComponent) {
      case "memberManagement":
        return <MemberManagement />;
      case "IncomeManager":
        return <IncomeManager />;
      case "ExpenseManagement":
        return <ExpenseManager />;
      case "messages":
        return <VerifiedMessages />;
      case "attendancePage":
        return <AttendanceGraph />;
      case "welcomeDashborad":
        return <WelcomeDashboard />;
      default:
        return <ExpenseManager />;
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } min-h-screen flex`}
    >
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex bg-black bg-opacity-50 md:hidden">
          <div className="ml-auto w-64 bg-blue-600 text-white p-6">
            <h2 className="text-2xl font-bold mb-6">Dashboard Menu</h2>
            <button
              onClick={handleDarkModeToggle}
              className="flex items-center text-xl mb-4"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 mr-2" />
              ) : (
                <FaMoon className="text-blue-200 mr-2" />
              )}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <ul className="space-y-4">
              <li
                onClick={() => {
                  setActiveComponent("memberManagement");
                  setIsMobileSidebarOpen(false);
                }}
                className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
              >
                <FaUserFriends size={20} className="mr-2" /> Member Management
              </li>
              <li
                onClick={() => {
                  setActiveComponent("expenseManagement");
                  setIsMobileSidebarOpen(false);
                }}
                className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
              >
                <GiMoneyStack size={20} className="mr-2" /> Expense Management
              </li>
              <li
                onClick={() => {
                  setActiveComponent("IncomeManager");
                  setIsMobileSidebarOpen(false);
                }}
                className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
              >
                <GiMoneyStack size={20} className="mr-2" /> Income Management
              </li>
              <li
                onClick={() => {
                  setActiveComponent("messages");
                  setIsMobileSidebarOpen(false);
                }}
                className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
              >
                <FaEnvelope size={18} className="mr-2" /> Messages
              </li>
              <li
                onClick={() => {
                  setActiveComponent("attendancePage");
                  setIsMobileSidebarOpen(false);
                }}
                className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
              >
                <ClipboardCheck size={20} className="mr-2" /> Attendance
              </li>
              <li
                className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </li>
            </ul>
          </div>
          <div className="flex-1" onClick={handleMobileSidebarToggle} />
        </div>
      )}

      {/* Sidebar for Desktop */}
      <aside
        className={`hidden md:block ${
          isSidebarExpanded ? "w-64" : "w-24"
        } bg-blue-600 text-white p-6 transition-width duration-300`}
      >
        <button
          className="mb-6 text-lg font-bold flex items-center"
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
        >
          {isSidebarExpanded ? "Collapse" : "Expand"}
        </button>
        <ul className="space-y-4">
          <li
            onClick={() => setActiveComponent("memberManagement")}
            className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
          >
            <FaUserFriends size={24} className="mr-2" />{" "}
            {isSidebarExpanded && "Member Management"}
          </li>
          <li
            onClick={() => setActiveComponent("expenseManagement")}
            className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
          >
            <GiMoneyStack size={28} className="mr-2" />{" "}
            {isSidebarExpanded && "Expense Management"}
          </li>
          <li
            onClick={() => setActiveComponent("IncomeManager")}
            className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
          >
            <GiMoneyStack size={28} className="mr-2" />{" "}
            {isSidebarExpanded && "Income Management"}
          </li>

          <li
            onClick={() => setActiveComponent("messages")}
            className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
          >
            <FaEnvelope size={20} className="mr-2" />{" "}
            {isSidebarExpanded && "Messages"}
          </li>
          <li
            onClick={() => setActiveComponent("attendancePage")}
            className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
          >
            <ClipboardCheck size={20} className="mr-2" />
            {isSidebarExpanded && "Attendance"}
          </li>
          <li
            className="p-2 hover:bg-blue-500 rounded cursor-pointer flex items-center"
            onClick={handleLogout}
          >
            <FaSignOutAlt size={20} className="mr-2" />{" "}
            {isSidebarExpanded && "Logout"}
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <nav className="flex items-center  p-4 shadow-md bg-white">
          {/* <h1 className="text-xl font-bold">
           
            wellcome dear <u>{localStorage.getItem("name")}</u>!
          </h1> */}
          <div className="w-full flex justify-between  items-center space-x-4">
            <button
              onClick={handleMobileSidebarToggle}
              className="md:hidden text-2xl"
            >
              <FaBars />
            </button>
            <button
              onClick={handleDarkModeToggle}
              className="hidden md:block text-2xl"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-blue-600" />
              )}
            </button>
            <img
              onClick={() => {
                setProfileOpen(!profileOpen);
              }}
              src={userImage || "/images/user-placeholder.png"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 cursor-pointer"
            />
          </div>
        </nav>
        <div className="p-8">{renderContent()}</div>
      </div>

      {/* Profile Update Modal */}
      {profileOpen && <UserProfileUpdate />}
    </div>
  );
};

export default Dashboard;

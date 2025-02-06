// frontend/src/hooks/useSignup.jsx
import { useState } from "react";
// import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState("")
  const [error ,setError] = useState("")
  // const { signup, isLoading, error, user } = useAuthStore(); // Get user from store
  const navigate = useNavigate();
  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // await signup(username, email, password);
         console.log(email);
         
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    loading,
    error,
  };
};

export default useSignup;

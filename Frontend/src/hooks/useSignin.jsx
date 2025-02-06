// frontend/src/hooks/useSignin.jsx
import { useState } from "react";
// import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const useSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { login, isLoading, error, user } = useAuthStore(); // Get user from store
  const [loading, setloading] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      
    } catch (err) {
      console.error("Signin failed:", err);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSignin,
    loading,
    error,
  };
};

export default useSignin;

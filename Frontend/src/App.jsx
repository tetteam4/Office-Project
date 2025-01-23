// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Pages/About.jsx";
import Contact from "./Pages/contact.jsx";
import HomePage from "./Pages/Home.jsx";

import AddMember from "./Components/AddMember";
import VerifyEmail from "./Components/verifyEmail";
import Dashboard from "./Components/dashboard/dashboard.jsx";
import LoginPage from "./Pages/loginPage.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Services from "./Pages/services.jsx";

const App = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="/verify_email/*" element={<VerifyEmail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

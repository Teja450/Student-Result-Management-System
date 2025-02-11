import React, { useState } from "react";
import enhancedStyles from "./Form.module.css";  // Enhanced UI (default)
import normalStyles from "./NormalForm.module.css";  // Normal UI alternative
import MainNavigation from "../Components/MainNavigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Default to enhanced UI mode
  const [isUiMode, setIsUiMode] = useState(true);
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsUiMode((prev) => !prev);
  };

  const currentStyles = isUiMode ? enhancedStyles : normalStyles;

  async function submitHandler() {
    try {
      const result = await axios.post(
        "http://localhost:8080/api/v1/admin/login",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );
      const serverMessage = result.data;
      if (serverMessage.success === true) {
        toast.success("Login Successful!");
        localStorage.clear();
        localStorage.setItem("admin", JSON.stringify(serverMessage.data));
        setUsername("");
        setPassword("");
        navigate("/adminlogin/adminview");
      } else {
        toast.error(serverMessage.message);
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      toast.error("Login Failed: " + error.message);
      setUsername("");
      setPassword("");
    }
  }

  return (
    <div>
      <MainNavigation />
      <div className={currentStyles.container}>
        <div
          className={currentStyles.left}
          style={{ backgroundImage: isUiMode ? "url(/Images/LoginBackground.jpg)" : "none" }}
        >
          <div className={currentStyles.formWrapper}>
            {/* Header row: Centered title and toggle button aligned right */}
            <div className={currentStyles.headerRow}>
              <p className={currentStyles.heading}>Admin Login</p>
              <button onClick={toggleMode} className={currentStyles.toggleBtn}>
                Toggle UI
              </button>
            </div>
            <div className={currentStyles.formContainer}>
              <label htmlFor="username" className={currentStyles.label}>
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className={currentStyles.formInput}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
              <label htmlFor="password" className={currentStyles.label}>
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={currentStyles.formInput}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className={currentStyles.submitButton}
                onClick={submitHandler}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div
          className={currentStyles.right}
          style={{ backgroundImage: "url(/Images/admin_image.jpg)" }}
        ></div>
      </div>
    </div>
  );
}

export default Admin;

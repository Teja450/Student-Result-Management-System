import React, { useState } from "react";
import enhancedStyles from "./Form.module.css";  // Enhanced UI styles (default)
import normalStyles from "./NormalForm.module.css";  // Normal UI styles
import MainNavigation from "../Components/MainNavigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Student() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Default UI mode: set to enhanced (true) by default.
  const [isUiMode, setIsUiMode] = useState(true);
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsUiMode((prevMode) => !prevMode);
  };

  // Use enhanced UI styles if toggled on; otherwise, normal styles.
  const currentStyles = isUiMode ? enhancedStyles : normalStyles;

  async function submitHandler() {
    try {
      const result = await axios.post(
        "http://localhost:8080/api/v1/student/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const serverMessage = result.data;
      if (serverMessage.success === true) {
        localStorage.clear();
        localStorage.setItem("student", JSON.stringify(serverMessage.data));
        toast.success("Login Successful!");
        setUsername("");
        setPassword("");
        navigate("/studentlogin/result/resultview");
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
          style={{ backgroundImage: "url(/Images/LoginBackground.jpg)" }}
        >
          <div className={currentStyles.formWrapper}>
            {/* Header row: Heading centered and toggle button at the end */}
            <div className={currentStyles.headerRow}>
              <p className={currentStyles.heading}>StudentLogin</p>
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
          style={{ backgroundImage: "url(/Images/student_image.jpg)" }}
        ></div>
      </div>
    </div>
  );
}

export default Student;

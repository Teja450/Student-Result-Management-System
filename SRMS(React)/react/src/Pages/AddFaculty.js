import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import MainNavigation from "../Components/MainNavigation";
import styles from "./Add.module.css";
import { toast } from "react-toastify";

function AddFaculty() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/admin/addTeacher", {
        name: name,
        username: username,
        password: password,
        designation: designation,
      });
      toast.success("Faculty Added Successfully");
      setName("");
      setDesignation("");
      setUsername("");
      setPassword("");
      navigate("/adminlogin/adminview");
    } catch (err) {
      toast.error("Faculty Registration Failed: " + (err.response ? err.response.data.message : err.message));
      setName("");
      setDesignation("");
      setUsername("");
      setPassword("");
    }
  }
  const onLogout = () => {
      localStorage.clear();
      toast.success("Logging Out!");
      navigate("/");
    };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.backContainer}>
          <Link to="/adminlogin/adminview" className={styles.backLink}>← Back</Link></div>
          <h2 className={styles.pageTitle}>Add Faculty</h2>
          <button onClick={onLogout} className={styles.logoutButton}>
            Logout
          </button>
      </header>
      <div className={styles.content}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Add a Faculty</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="facultyName" className={styles.label}>Faculty Name:</label>
            <input
              type="text"
              id="facultyName"
              name="facultyName"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter faculty name"
              required
            />
            <label htmlFor="designation" className={styles.label}>Designation:</label>
            <input
              type="text"
              id="designation"
              name="designation"
              className={styles.input}
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              placeholder="Enter designation"
              required
            />
            <label htmlFor="username" className={styles.label}>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
            <label htmlFor="password" className={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
            <button type="submit" className={styles.submitButton}>Add Faculty</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default AddFaculty;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import MainNavigation from "../Components/MainNavigation";
import styles from "./Add.module.css";
import { toast } from "react-toastify";

function AddStudent() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/admin/addStudent", {
        name: name,
        username: username,
        password: password,
      });
      const serverMessage = response.data;
      if (serverMessage.success) {
        toast.success("Student Added Successfully");
        setName("");
        setUsername("");
        setPassword("");
        navigate("/adminlogin/adminview");
      } else {
        toast.error(serverMessage.message);
        setName("");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      toast.error("Adding student failed: " + (error.response ? error.response.data.message : error.message));
      setName("");
      setUsername("");
      setPassword("");
    }
  }

  const onLogout = () => {
    localStorage.clear();
    toast.success("Logging Out!");
    navigate("/About");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
            <div className={styles.backContainer}>
                        <Link to="/adminlogin/adminview" className={styles.backLink}>← Back</Link>
                        </div>
              <h2 className={styles.pageTitle}>Add Student</h2>
              <button onClick={onLogout} className={styles.logoutButton}>
                Logout
              </button>
            </header>
      <div className={styles.content}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Add a Student</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="studentName" className={styles.label}>Student Name:</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter student name"
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
            <button type="submit" className={styles.submitButton}>Add Student</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default AddStudent;

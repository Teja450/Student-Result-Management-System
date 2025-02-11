import React from "react";
import styles from "./Result.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Result() {
  const navigate = useNavigate();
  const storedStudent = JSON.parse(localStorage.getItem("student"));

  async function buttonHandler(event) {
    const btnval = event.target.value;
    localStorage.setItem("sem", btnval);
    toast.success(`Fetching Semester ${btnval} results...`);
    navigate("/studentlogin/result/resultview");
  }

  async function queryButtonHandler(event) {
    toast.info("Navigating to Query Page...");
    navigate("/query");
  }

  function onLogout() {
    toast.info("Logging Out...");
    localStorage.removeItem("student");
    navigate("/");
  }

  return (
    <div className={styles.result}>
      <header className={styles.header}>
        <div className={styles.backContainer}>
        <Link to="/" className={styles.backLink}>← Back</Link>
        </div>
        <div className={styles.headerButtons}>
          <button onClick={queryButtonHandler} className={styles.queryButton}>
            Query
          </button>
          <button onClick={onLogout} className={styles.logoutButton}>
            Logout
          </button>
        </div>
      </header>
      <div className={styles.mainContainer}>
        <div className={styles.infoCard}>
          <h2 className={styles.studentInfo}>
            USN: {storedStudent?.usn || "N/A"}
          </h2>
          <h1 className={styles.pageTitle}>Results</h1>
        </div>
        <div className={styles.buttonContainer}>
          {["1", "2", "3", "4", "5", "6", "7", "8"].map((sem) => (
            <button
              key={sem}
              className={styles.resultButton}
              value={sem}
              onClick={buttonHandler}
            >
              Semester {sem}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Result;

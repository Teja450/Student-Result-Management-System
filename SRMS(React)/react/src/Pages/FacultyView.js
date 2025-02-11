import React from "react";
import styles from "./FacultyView.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function FacultyView() {
  const navigate = useNavigate();

  // Handler for logout
  const onLogout = () => {
    localStorage.clear();
    toast.success("Logging Out!");
    navigate("/");
  };

  // Handler for "Add or Update Results" button
  const handleAddOrUpdate = () => {
    alert("Adding or updating result");
    navigate("/facultylogin/facultyview/addorupdateresult");
  };

  return (
    <div className={styles.facultyViewContainer}>
      <header className={styles.header}>
      <div className={styles.backContainer}>
                  <Link to="/About" className={styles.backLink}>← Back</Link>
                  </div>
        <h2 className={styles.pageTitle}>Faculty Dashboard</h2>
        <button onClick={onLogout} className={styles.logoutButton}>
          Logout
        </button>
      </header>
      <div className={styles.content}>
        <div className={styles.mainheading}>
          
        <h1 className={styles.mainHeading}>Manage Student Results</h1>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.actionButton} onClick={handleAddOrUpdate}>
            Add or Update Results
          </button>
        </div>
      </div>
    </div>
  );
}

export default FacultyView;

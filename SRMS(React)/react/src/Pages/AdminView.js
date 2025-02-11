import React from 'react';
import styles from './AdminView.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminView() {
  const navigate = useNavigate();

  const onLogout = () => {
      localStorage.clear();
      toast.success("Logging Out!");
      navigate("/");
    };

  const handleAddStudent = () => {
    // toast.info("Navigating to Add Student");
    navigate("/adminlogin/adminview/addstudent");
  };

  const handleAddFaculty = () => {
    // toast.info("Navigating to Add Faculty");
    navigate("/adminlogin/adminview/addfaculty");
  };

  const handleViewQuery = () => {
    // toast.info("Navigating to View Query");
    navigate("/adminlogin/adminview/viewquery");
  };

  return (
    <div className={styles.adminViewContainer}>
      <header className={styles.header}>
            <div className={styles.backContainer}>
                        <Link to="/About" className={styles.backLink}>← Back</Link>
                        </div>
              <h2 className={styles.pageTitle}>Admin Dashboard</h2>
              <button onClick={onLogout} className={styles.logoutButton}>
                Logout
              </button>
            </header>
      <div className={styles.content}>
        <h1 className={styles.mainHeading}>Choose an Option</h1>
        <div className={styles.buttonContainer}>
          <button onClick={handleAddStudent} className={styles.actionButton}>
            Add Student
          </button>
          <button onClick={handleAddFaculty} className={styles.actionButton}>
            Add Faculty
          </button>
          <button onClick={handleViewQuery} className={styles.actionButton}>
            View Query
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminView;

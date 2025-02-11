import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./View.module.css";

function View() {
  const [queriesData, setQueriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/admin/queries");
        if (response.status === 200) {
          // Assume the backend returns { success: true, data: [ ... ] }
          const data = response.data.data;
          if (Array.isArray(data)) {
            setQueriesData(data);
          } else {
            console.error("Expected an array but received:", data);
            setQueriesData([]);
          }
        } else {
          console.log("Error fetching queries");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, []);


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
               <h2 className={styles.pageTitle}>Queries</h2>
               <button onClick={onLogout} className={styles.logoutButton}>
                 Logout
               </button>
           </header>
      <div className={styles.content}>
        <div className={styles.tableContainer}>
          {queriesData.length > 0 ? (
            <table className={styles.queryTable}>
              <thead>
                <tr>
                  <th>USN</th>
                  <th>Query</th>
                </tr>
              </thead>
              <tbody>
                {queriesData.map((query, index) => (
                  <tr key={index}>
                    <td>{query.username}</td>
                    <td>{query.query}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className={styles.noRecords}>No queries found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default View;

import React, { useState, useEffect } from "react";
import styles from "./ResultView.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ResultView() {
  const [results, setResults] = useState([]);
  const [student, setStudent] = useState(null);
  const [semester, setSemester] = useState(null);

  useEffect(() => {
    // Retrieve stored student details and semester from localStorage.
    const storedStudent = JSON.parse(localStorage.getItem("student"));
    setStudent(storedStudent);
    const sem = localStorage.getItem("sem");
    if (sem) {
      setSemester(sem);
    }
    const payload = {
      semester: sem ? sem : storedStudent?.semester,
      student_id: storedStudent ? storedStudent.usn : ""
    };

    console.log("Sending studentID:", payload.student_id, "semester:", payload.semester);

    const fetchData = async () => {
      try {
        // Use a POST or GET depending on your backend; here we assume POST has been changed to GET
        const response = await axios.post("http://localhost:8080/api/v1/result/fetch", payload, {
          headers: { "Content-Type": "application/json" }
        });
        console.log("Response from backend:", response.data);
        // Expecting either a plain array or an object with a 'data' property that is an array
        const data = Array.isArray(response.data) ? response.data : response.data.data;
        if (Array.isArray(data)) {
          setResults(data);
        } else {
          console.log("No records found or unexpected data format");
          setResults([]);
        }
      } catch (err) {
        console.error("Error: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.result}>
      <header className={styles.resultHeader}>
        <Link to="/studentlogin/result/" className={styles.backLink}>← Back</Link>
        <div className={styles.studentInfo}>
          <h2>Result</h2>
          <p>USN: {student ? student.usn : "N/A"}</p>
          <p>Semester: {semester ? semester : student?.semester}</p>
        </div>
      </header>
      <div className={styles.resultViewContainer}>
        {results.length > 0 ? (
          <table className={styles.resultTable}>
            <thead>
              <tr>
                <th>Subject Name</th>
                <th>Internal Marks</th>
                <th>External Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, index) => (
                <tr key={index}>
                  <td>{res.subjectName}</td>
                  <td>{res.internalMarks}</td>
                  <td>{res.externalMarks}</td>
                  <td>{res.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.noRecords}>
            <p>No records found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultView;

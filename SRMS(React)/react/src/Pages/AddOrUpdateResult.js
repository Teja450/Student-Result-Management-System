import React, { useState, useEffect } from 'react';
import styles from './AddOrUpdateResult.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import subjectsBySemester from '../Components/DATA/subjectBySemester';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddOrUpdateResult() {
  const navigate = useNavigate();

  // Form state variables
  const [usn, setUsn] = useState('');
  const [semester, setSemester] = useState('');
  const [subjectId, setSubjectId] = useState(""); // numeric id or empty string
  const [subjectName, setSubjectName] = useState('');
  const [internalMarks, setInternalMarks] = useState('');
  const [externalMarks, setExternalMarks] = useState('');
  const [grade, setGrade] = useState('');

  // Subjects options for the selected semester
  const [subjectOptions, setSubjectOptions] = useState([]);

  // Update subject dropdown when semester changes
  useEffect(() => {
    if (semester && subjectsBySemester[semester]) {
      setSubjectOptions(subjectsBySemester[semester]);
    } else {
      setSubjectOptions([]);
    }
    // Clear previously selected subject when semester changes
    setSubjectId("");
    setSubjectName("");
  }, [semester]);

  // Grading function: adjust thresholds as needed.
  const computeGrade = (internal, external) => {
    const intMarks = parseInt(internal, 10);
    const extMarks = parseInt(external, 10);
    if (isNaN(intMarks) || isNaN(extMarks)) return '';
    const total = intMarks + extMarks;
    if (total >= 90) return 'A+';
    else if (total >= 80) return 'A';
    else if (total >= 70) return 'B';
    else if (total >= 60) return 'C';
    else return 'D';
  };

  // Update grade whenever internal or external marks change.
  useEffect(() => {
    setGrade(computeGrade(internalMarks, externalMarks));
  }, [internalMarks, externalMarks]);

  // Submit handler with subject validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate subject selection
    if (subjectId === "" || isNaN(subjectId)) {
      alert("Please select an item from the subject list");
      return;
    }

    const payload = {
      usn,
      semester,
      subjectName, // human-readable subject name
      internalMarks: parseInt(internalMarks, 10),
      externalMarks: parseInt(externalMarks, 10),
      grade,
      subjectId  // numeric
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/teacher/addOrUpdateResult",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data.success) {
        alert("Result saved successfully");
        navigate("/facultylogin/facultyview");
      } else {
        alert("Failed to save result: " + response.data.message);
      }
    } catch (error) {
      console.error("Error submitting result:", error);
      alert("Failed to save result: " + error.message);
    }
  };

  const onLogout = () => {
    localStorage.clear();
    toast.success("Logging Out!");
    navigate("/About");
  };


  return (
    <div className={styles.result}>
      <header className={styles.header}>
            <div className={styles.backContainer}>
                        <Link to="/" className={styles.backLink}>← Back</Link>
                        </div>
              <h2 className={styles.pageTitle}>Manage Student Result</h2>
              <button onClick={onLogout} className={styles.logoutButton}>
                Logout
              </button>
            </header>
      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>USN:</label>
            <input
              type="text"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              placeholder="Enter USN"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Semester:</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
              className={styles.input}
            >
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Subject:</label>
            <select
              value={subjectId === "" ? "" : subjectId.toString()}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "") {
                  setSubjectId("");
                  setSubjectName("");
                } else {
                  const id = parseInt(value, 10);
                  setSubjectId(id);
                  const selected = subjectOptions.find(opt => opt.id === id);
                  setSubjectName(selected ? selected.name : '');
                }
              }}
              required
              className={styles.input}
            >
              <option value="">Select Subject</option>
              {subjectOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.code} - {opt.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Internal Marks:</label>
            <input
              type="number"
              value={internalMarks}
              onChange={(e) => setInternalMarks(e.target.value)}
              placeholder="Enter internal marks"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>External Marks:</label>
            <input
              type="number"
              value={externalMarks}
              onChange={(e) => setExternalMarks(e.target.value)}
              placeholder="Enter external marks"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Grade:</label>
            <input
              type="text"
              value={grade}
              readOnly
              placeholder="Auto computed grade"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Save Result
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddOrUpdateResult;

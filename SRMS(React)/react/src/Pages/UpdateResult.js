// AddResult.js
import React, { useEffect, useState } from 'react';
import styles from './AddResult.module.css';
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';

 function UpdateResult(){
  const navigate=useNavigate();
  const sem=localStorage.getItem("semres");
  const usn=localStorage.getItem("usn");
  const subjectName = localStorage.getItem("course");
  const [internalMarks, setInternalMarks] = useState('');
  const [externalMarks, setExternalMarks] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8085/api/v1/result/fetches",
          {
            sem: sem,
            student_id: usn,
            course: subjectName,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const res=response.data[0];
        setGrade(res.grade);
        setExternalMarks(res.external);
        setInternalMarks(res.internal);
      } catch (err) {
        alert("Error: " + err);
      }
    };
    fetchData();
  }, []); 
  
  async function handleUpdateResult() {
    try{
      await axios.post("http://localhost:8085/api/v1/result/save",{
      studentId:usn,
      sem:sem,
      course:subjectName,
      internal:internalMarks,
      external:externalMarks,
      grade:grade,
    });
    alert("Successfully Updated");
    navigate("/facultylogin/facultyview")
  }catch(err){
    alert("Error: "+err);
  }
}

  return (
    <div className={styles.result}>
        <h1><Link to=".." relative="path">Back</Link></h1>
        <h1>Update Results</h1>
    <div className={styles.addResultContainer}>      
      <div className={styles.formContainer}>

      Sem:
        <input
          type="text"
          id="subjectName"
          value={sem}
          readOnly
          className={styles.formInput}
        />

      USN:
        <input
          type="text"
          id="subjectName"
          value={usn}
          readOnly
          className={styles.formInput}
        />  

        Subject Name:
        <input
          type="text"
          id="subjectName"
          value={subjectName}
          readOnly
          className={styles.formInput}
        />

        Internal Marks:
        <input
          type="number"
          id="internalMarks"
          value={internalMarks}
          onChange={(e) => setInternalMarks(e.target.value)}
          className={styles.formInput}
        />

       External Marks:
        <input
          type="number"
          id="externalMarks"
          value={externalMarks}
          onChange={(e) => setExternalMarks(e.target.value)}
          className={styles.formInput}
        />

        Grade:
        <input
          type="text"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className={styles.formInput}
        />

        <button onClick={handleUpdateResult} className={styles.submitButton}>
          Update Result
        </button>
      </div>
    </div>
    </div>
  );
}

export default UpdateResult;
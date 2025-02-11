// AddResult.js
import React, { useState } from 'react';
import styles from './AddResult.module.css';
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';

const rightAlignedStyle = {
  textAlign: 'right',
  color:'white',
};

 function AddResult(){
  const navigate=useNavigate();
  const [sem,setSem]=useState('');
  const [usn,setUsn]=useState('');
  const [subjectName, setSubjectName] = useState('');
  const [internalMarks, setInternalMarks] = useState('');
  const [externalMarks, setExternalMarks] = useState('');
  const [grade, setGrade] = useState('');

  async function handleAddResult ()  {
    try{
      await axios.post("http://localhost:8080/api/v1/result/save",{
        studentId:usn,
        sem:sem,
        course:subjectName,
        internal:internalMarks,
        external:externalMarks,
        grade:grade,
      });
      alert("Successfully Result Added");
      navigate("/facultylogin/facultyview")
    }catch(err){
      alert("Adding Results Failed")
    }    
  }

  return (
    <div className={styles.result}>
        <h1 style={rightAlignedStyle}><Link to=".." relative="path">Back</Link></h1>
        <h1>Add Results</h1>
        <div className={styles.addResultContainer}>
        <div className={styles.formContainer}>

        USN:
        <input
          type="text"
          id="subjectName"
          value={usn}
          onChange={(e) => setUsn(e.target.value)}
          className={styles.formInput}
        />

        Sem:
        <input
          type="text"
          id="subjectName"
          value={sem}
          onChange={(e) => setSem(e.target.value)}
          className={styles.formInput}
        />


        Subject Name:
        <input
          type="text"
          id="subjectName"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
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

        <button onClick={handleAddResult} className={styles.submitButton}>
          Add Result
        </button>
      </div>
    </div>
    </div>
  );
};

export default AddResult;
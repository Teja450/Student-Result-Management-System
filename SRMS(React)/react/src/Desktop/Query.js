import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "./Query.module.css";
import MainNavigation from "../Components/MainNavigation";

function Query() {
  const navigate = useNavigate();
  const [usn, setUsn] = useState("");
  const [query, setQuery] = useState("");

  async function handleSubmit() {
    try {
      await axios.post("http://localhost:8080/api/v1/student/query", {
        username: usn,
        query: query,
      });
      toast.success("Submitted Successfully!!");
      setUsn("");
      setQuery("");
      navigate("/");
    } catch (err) {
      toast.error("Error: " + err.message);
    }
  }

  // Build the background image URL using process.env.PUBLIC_URL.
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Images/query.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    position: "relative",
  };

  return (
    <>
      {/* If you have MainNavigation imported, you can render it above */}
       <MainNavigation /> 
      <div className={styles.query} style={backgroundStyle}>
        {/* Optionally add an overlay div if desired */}
        <div className={styles.overlay}></div>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>
            Please provide the following to enquire.
          </h1>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <label htmlFor="usn" className={styles.label}>USN:</label>
            <input
              type="text"
              id="usn"
              name="usn"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              className={styles.formInput}
              placeholder="Enter your USN"
              required
            />
            <label htmlFor="query" className={styles.label}>Query:</label>
            <textarea
              id="query"
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.formTextarea}
              placeholder="Enter your query here"
              required
            />
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Query;

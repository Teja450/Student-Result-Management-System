import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Student Result Management System</h1>
          <p className={styles.tagline}>
            Simplifying academic results with accuracy and ease.
          </p>
          <Link to="/studentlogin" className={styles.ctaButton}>
            Login Now
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Key Benefits</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Effortless Result Entry</h3>
            <p>
              Easily record, update, and retrieve student scores through an intuitive interface.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Secure Data Management</h3>
            <p>
              Maintain accurate records with robust security and data integrity measures.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Insightful Performance Reports</h3>
            <p>
              Generate clear, concise analytics to track academic progress and trends.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Student Result Management System. Teja Kumar M 
        </p>
      </footer>
    </div>
  );
};

export default Home;

import React from 'react';
import classes from './About.module.css';
import MainNavigation from '../Components/MainNavigation';

function About() {
  return (
    <div className={classes.section}>
      {/* A dark overlay to improve text readability */}
      <div className={classes.overlay}></div>

      {/* Fixed navbar */}
      <div className={classes.navbar}>
        <MainNavigation />
      </div>

      {/* Main content card */}
      <div className={classes.content}>
        <p className={classes.paragraph}>
          Welcome to the Student Result Management System, where excellence meets efficiency! 
          Our platform is designed to streamline and enhance the process of managing and analyzing student results, 
          providing educational institutions with a powerful tool to track academic performance seamlessly. 
          Our mission is to revolutionize the way educational institutions handle student results—simplifying everything from result entry 
          to analysis—and to empower educators with valuable insights to support student success.
        </p>
      </div>
    </div>
  );
}

export default About;

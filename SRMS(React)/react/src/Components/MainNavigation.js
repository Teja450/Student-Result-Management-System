import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check localStorage for each role (adjust these keys as per your application)
  const student = localStorage.getItem("student");
  const faculty = localStorage.getItem("faculty");
  const admin = localStorage.getItem("admin");

  // Determine which role is logged in (if any)
  let userRole = null;
  if (student) {
    userRole = "student";
  } else if (faculty) {
    userRole = "faculty";
  } else if (admin) {
    userRole = "admin";
  }

  const isLoggedIn = userRole !== null;

  // Set extra link text and destination based on role
  let extraLinkText = "";
  let extraLinkDestination = "";
  if (userRole === "student") {
    extraLinkText = "View Result";
    extraLinkDestination = "/studentlogin/result";
  } else if (userRole === "faculty") {
    extraLinkText = "Faculty Dashboard";
    extraLinkDestination = "/facultylogin/facultyview";
  } else if (userRole === "admin") {
    extraLinkText = "Admin Dashboard";
    extraLinkDestination = "/adminlogin/adminview";
  }

  // Logout handler: clear all localStorage entries.
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  const toggleMenuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={classes.header}>
      {/* Left container for logo */}
      <div className={classes.left}>
        <NavLink to="/" className={classes.logo}>
          <img src="/Images/collegeicon.png" alt="Logo" className={classes.image} />
        </NavLink>
      </div>

      {/* Center container for main navigation links */}
      <nav className={classes.centerNav}>
        <ul className={`${classes.list} ${isMenuOpen ? classes.open : ""}`}>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/studentlogin"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              Student
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/facultylogin"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              Faculty
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adminlogin"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/query"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              Add Query
            </NavLink>
          </li>
          {/* Extra mobile items */}
          {isLoggedIn && (
            <>
              <li className={classes.mobileExtra}>
                <NavLink
                  to={extraLinkDestination}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {extraLinkText}
                </NavLink>
              </li>
              <li className={classes.mobileExtra} >
                <button
                  onClick={() => {
                    logoutHandler();
                    setIsMenuOpen(false);
                  }}
                  className={classes.logoutButton}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
        {/* Hamburger icon for mobile */}
        <div className={classes.hamburgerContainer}>
        <button className={classes.hamburgerIcon} onClick={toggleMenuHandler}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </button>

        </div>
      </nav>

      {/* Right container for extra links (desktop) */}
      <div className={classes.right}>
        {isLoggedIn && (
          <div className={classes.extraLinks}>
            <NavLink
              to={extraLinkDestination}
              className={({ isActive }) => (isActive ? classes.active : undefined)}
            >
              {extraLinkText}
            </NavLink>
            <button onClick={logoutHandler} className={classes.logoutButton}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default MainNavigation;

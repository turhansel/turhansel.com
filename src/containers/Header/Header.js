import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import DarkToggle from "../../components/DarkToggle/DarkToggle";
import StyleContext from "../../StyleContext";
import {
  about,
  workExperiences,
  skillsSection,
  openSource,
  educationInfo,
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewEducation = educationInfo.display;
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &gt; $</span>
          <span className="logo-name">/{about.username}</span>
          <span className="grey-color blink">.</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Projects</a>
            </li>
          )}

          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="#darktoggle">
              <DarkToggle />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;

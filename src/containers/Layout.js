import React, { Component } from "react";
import Header from "./Header/Header";
import { StyleProvider } from "../StyleContext";
import "./Layout.scss";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Progress from "./SkillProgress/SkillProgress";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Profile from "./Profile/Profile";
import Top from "./TopButton/TopButton";
import Footer from "./Footer/Footer";
// import StartupProject from "./StartupProjects/StartupProject";
// import Achievement from "./achievement/Achievement";
// import Blogs from "./blogs/Blogs";
//
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";
//
//
// import Twitter from "./twitter-embed/twitter";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({ isDark: JSON.parse(localStorage.getItem("isDark")) });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark }, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <About />
          <Skills />
          <Progress />
          <Education />
          <Experience />
          <Projects />
          <Profile />
          <Top />
          <Footer />
          {/* 
          <Blogs />
             */}
        </StyleProvider>
      </div>
    );
  }
}

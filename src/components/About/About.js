import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./About.scss";
import "@lottiefiles/lottie-player";
import Social from "./Social/Social";
import Button from "../Button/Button";

import { greeting } from "../../portfolio";
import StyleContext from "../../StyleContext";

export default function About() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <Social />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"
              style={{ width: "90%" }}
            ></lottie-player>
          </div>
        </div>
      </div>
    </Fade>
  );
}

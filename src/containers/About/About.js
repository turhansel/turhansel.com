import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import DisplayLottie from "../../components/DisplayLottie/DisplayLotties";
import "./About.scss";
import developer from "../../assets/lotties/developer.json";

import "@lottiefiles/lottie-player";
import Social from "../../components/Social/Social";
import Button from "../../components/Button/Button";

import { illustration, about } from "../../portfolio";
import StyleContext from "../../StyleContext";

export default function About() {
  const { isDark } = useContext(StyleContext);
  if (!about.displayAbout) {
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
                {about.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {about.subTitle}
              </p>
              <Social />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={about.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={developer} />
            ) : (
              <img
                alt="hello dude"
                src={require("../../assets/lotties/displayLottie.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}

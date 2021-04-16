import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="attribution">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Customized by 👾 Turhan Sel")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a
            href="https://github.com/turhansel/personal-portfolio"
            target="_blank"
            rel="noreferrer noopener"
          >
            personal-portfolio
          </a>
        </p>
      </div>
    </Fade>
  );
}

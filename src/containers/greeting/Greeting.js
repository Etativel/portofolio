import {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <p
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
              </p>
              <p
                className={
                  isDark ? "dark-mode greeting-text-second" : "greeting-text"
                }
              >
                {greeting.secondTitle}
              </p>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text="Contact me"
                  href="#contact"
                  className="contact-me-btn-mobile"
                />
                {greeting.resumeLink && (
                  <a
                    className="download-link-button"
                    href={greeting.resumeLink}
                    download="Muhammad Farhan Maulana_CV.pdf"
                  >
                    <Button
                      text="My resume"
                      className="download-my-resume-btn-mobile"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div> */}
        </div>
      </div>
    </Fade>
  );
}

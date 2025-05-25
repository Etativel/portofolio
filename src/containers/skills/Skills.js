import "./Skills.scss";
import {useContext} from "react";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              Technologies
            </h1>
            <SoftwareSkill />
          </div>
        </Fade>
      </div>
    </div>
  );
}

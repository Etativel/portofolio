import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <div className="skill-div">
          <p>Front-End</p>
          <ul className="dev-icons">
            {skillsSection.frontEndSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img
                    src={skills.skillIcon}
                    alt={skills.skillName}
                    className="svg-icon"
                  />
                  <p className="skill-name">{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="skill-div">
          <p>Back-End</p>

          <ul className="dev-icons">
            {skillsSection.backEndSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img
                    src={
                      !isDark && skills.skillIconLight
                        ? skills.skillIconLight
                        : skills.skillIcon
                    }
                    alt={skills.skillName}
                    className="svg-icon"
                  />
                  <p className="skill-name">{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="skill-div">
          <p>Dev-Ops</p>

          <ul className="dev-icons">
            {skillsSection.devOpsSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img
                    src={
                      !isDark && skills.skillIconLight
                        ? skills.skillIconLight
                        : skills.skillIcon
                    }
                    alt={skills.skillName}
                    className="svg-icon"
                  />
                  <p className="skill-name">{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="skill-div">
          <p>Data & AI Tools</p>

          <ul className="dev-icons">
            {skillsSection.dataAndTools.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img
                    src={
                      !isDark && skills.skillIconLight
                        ? skills.skillIconLight
                        : skills.skillIcon
                    }
                    alt={skills.skillName}
                    className="svg-icon"
                  />
                  <p className="skill-name">{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

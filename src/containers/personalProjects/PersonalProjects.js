import "./personalProjects.scss";
import {Fade} from "react-reveal";
import {
  NodesBlogDetails,
  FoodlensDetails
} from "../../components/personalProjects";

export default function PersonalProjects() {
  return (
    <div className="main personalProjects" id="projects">
      <div>
        <section className="projects-section" id="projects">
          <span className="projects-header">
            <h1 className="projects-title">Projects</h1>
          </span>
          <div className="projects-container">
            <Fade
              bottom
              duration={1000}
              distance="20px"
              className="project-fade"
            >
              <div className="project-fade">
                <FoodlensDetails />
              </div>
            </Fade>
            <Fade
              bottom
              duration={1000}
              distance="20px"
              className="project-fade"
            >
              <div className="project-fade">
                <NodesBlogDetails />
              </div>
            </Fade>
          </div>
        </section>
      </div>
    </div>
  );
}

import "./personalProjects.scss";
import {Fade} from "react-reveal";
import {
  NodesBlogDetails,
  FoodlensDetails,
  CvMakerDetails,
  FileUploaderDetails
} from "../../components/personalProjects";

const projects = [
  <FoodlensDetails />,
  <NodesBlogDetails />,
  <FileUploaderDetails />,
  <CvMakerDetails />
];

export default function PersonalProjects() {
  return (
    <div className="main personalProjects" id="projects">
      <div>
        <section className="projects-section" id="projects">
          <span className="projects-header">
            <h1 className="projects-title">Projects</h1>
          </span>
          <div className="projects-container">
            {projects.map((project, index) => {
              return (
                <Fade
                  key={index}
                  bottom
                  duration={1000}
                  distance="20px"
                  className="project-fade"
                >
                  <div className="project-fade">{project}</div>
                </Fade>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

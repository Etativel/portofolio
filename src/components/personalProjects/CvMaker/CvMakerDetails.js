/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import "./CvMakerDetails.scss";
import {useContext, useState} from "react";
import CvMakerStack from "./CvMakerStack";
import CvMakerLinks from "./CvMakerLinks";
import {motion} from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import StyleContext from "../../../contexts/StyleContext";
import {ChevronRight, ChevronLeft} from "lucide-react";

// import {cv1, cv2, cv3} from "../../../assets/projectsImage";

export default function CvMakerDetails() {
  const {isDark} = useContext(StyleContext);
  const isLg = useMediaQuery("(min-width: 1024px)");
  const [imgIndex, setImgIndex] = useState(0);

  const projectImage = [
    "https://res.cloudinary.com/dgndmndq3/image/upload/v1748264485/1_ie6kwq.jpg",
    "https://res.cloudinary.com/dgndmndq3/image/upload/v1748264484/2_ik7uxj.jpg",
    "https://res.cloudinary.com/dgndmndq3/image/upload/v1748264490/3_x2waoz.jpg"
  ];

  function handleImageIndexChange(increase) {
    setImgIndex(prev => {
      if (increase) {
        return (prev + 1) % projectImage.length;
      } else {
        return (prev - 1 + projectImage.length) % projectImage.length;
      }
    });
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImgIndex(prev => (prev + 1) % projectImage.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [projectImage.length]);

  return (
    <span className="project-wrapper">
      <h1 className="project-index">5.</h1>
      <div className={`project-container ${isDark ? "dark-theme" : ""}`}>
        <div className="project-shadow-bg"></div>
        <div className="project-text">
          <div>
            <h1 className="project-title">CV Maker</h1>
            <h2 className="project-subtitle">
              User-friendly CV Builder Designed for Software Engineers
            </h2>
          </div>
          <div className="project-content">
            <div className="project-info-container">
              <div>
                <h2 className="project-about">About</h2>
                <p className="project-info">
                  CV Maker is a web app that helps software engineers create
                  resumes easily. It offers a clean template with real-time
                  preview and works well on both desktop and mobile. Users can
                  fill out their details and download the resume as a PDF using{" "}
                  <em className="text-blue-500 not-italic">html2canvas</em>
                </p>
                <br />
                <p className="project-further-info">
                  <strong>Key Features:</strong>
                  <br />
                  <ul>
                    <li>
                      <em className="text-blue-500 not-italic">
                        ATS-Friendly:
                      </em>{" "}
                      Layout designed to work well with Applicant Tracking
                      Systems.
                    </li>
                    <li>
                      <em className="text-blue-500 not-italic">
                        Professional Template:
                      </em>{" "}
                      Tailored for software engineer resumes.
                    </li>
                    <li>
                      <em className="text-blue-500 not-italic">
                        Real-Time Preview:
                      </em>{" "}
                      See updates as you type.
                    </li>
                    <li>
                      <em className="text-blue-500 not-italic">
                        Responsive Design:
                      </em>{" "}
                      Looks great on desktop and mobile.
                    </li>
                    <li>
                      <em className="text-blue-500 not-italic">
                        Download to PDF:
                      </em>{" "}
                      Easily export your resume.
                    </li>
                  </ul>
                  <strong>Technologies Used:</strong>
                  <br />
                  <em className="text-blue-500 not-italic">React</em> with
                  <em className="text-blue-500 not-italic">Vite</em>,{" "}
                  <em className="text-blue-500 not-italic">html2canvas</em>,{" "}
                  <em className="text-blue-500 not-italic">JsPDF</em>,{" "}
                  deployment via
                  <em className="text-blue-500 not-italic">Vercel</em>, and
                  styled using <em className="text-blue-500 not-italic">CSS</em>
                </p>
              </div>

              <CvMakerLinks />
              <CvMakerStack />
            </div>
          </div>
        </div>
        <div className={`project-image-wrapper`}>
          <motion.div
            whileHover={{
              x: isLg ? -100 : 0,
              scale: isLg ? 1.2 : 1.1,
              transition: {duration: 0.2}
            }}
            whileTap={{
              x: isLg ? -100 : 0,
              scale: isLg ? 1.2 : 1.1,
              transition: {duration: 0.2}
            }}
            className={`project-motion  ${isDark ? "dark-theme" : ""}`}
          >
            <img
              // src={isDark ? nodesDark : nodesLight}
              src={projectImage[imgIndex]}
              alt="project image"
              className="project-img"
              aria-label="project mobile view"
            />
          </motion.div>
          <div className="carousel-btn-container">
            <button
              onClick={() => handleImageIndexChange(false)}
              className="carousel-btn"
            >
              <ChevronLeft className={`arrow ${isDark ? "dark-theme" : ""}`} />
            </button>
            <button
              onClick={() => handleImageIndexChange(true)}
              className="carousel-btn"
            >
              <ChevronRight className={`arrow ${isDark ? "dark-theme" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </span>
  );
}

/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import "./FireCastDetails.scss";
import {useContext, useState} from "react";
import FireCastStack from "./FireCastStack";
import FireCastLinks from "./FireCastLinks";
import {motion} from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import StyleContext from "../../../contexts/StyleContext";
import {ChevronRight, ChevronLeft} from "lucide-react";

export default function FireCastDetails() {
  const {isDark} = useContext(StyleContext);
  const isLg = useMediaQuery("(min-width: 1024px)");
  const [imgIndex, setImgIndex] = useState(0);

  const projectImage = [
    "https://res.cloudinary.com/dgndmndq3/image/upload/v1750731214/firecast_1_wkuw3i.jpg",
    "https://res.cloudinary.com/dgndmndq3/image/upload/v1750731214/firecast_2_v5thub.jpg",
    "https://res.cloudinary.com/dgndmndq3/image/upload/v1750731214/firecast_3_rapoke.jpg",
    "https://res.cloudinary.com/dgndmndq3/image/upload/v1750731214/firecast_4_goru5r.jpg"
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

  return (
    <span className="project-wrapper" id="firecast">
      <h1 className="project-index">3.</h1>
      <div className={`project-container ${isDark ? "dark-theme" : ""}`}>
        <div className="project-shadow-bg"></div>
        <div className="project-text">
          <div>
            <h1 className="project-title">FireCast</h1>
            <h2 className="project-subtitle">
              A Satellite-Based Wildfire Prediction and Forecasting Web App
            </h2>
          </div>
          <div className="project-content">
            <div className="project-info-container">
              <div>
                <h2 className="project-about">About</h2>
                <p className="project-info">
                  FireCast is a fire prediction and forecasting web app that
                  uses satellite images to show areas likely to burn and
                  provides weather forecasts for the area. It features
                  satellite-based fire prediction using satellite imagery to
                  identify zones at high risk of wildfires, weather forecasting
                  for short and long term planning, and interactive maps that
                  allow users to zoom and select the regions. The frontend is
                  built with <em className="text-blue-500 not-italic">React</em>{" "}
                  and <em className="text-blue-500 not-italic">Vite</em>, styled
                  with{" "}
                  <em className="text-blue-500 not-italic">Tailwind CSS</em>,
                  and features interactive visualizations using{" "}
                  <em className="text-blue-500 not-italic">D3.js</em>,{" "}
                  <em className="text-blue-500 not-italic">MapTiler SDK</em>,
                  and <em className="text-blue-500 not-italic">OpenLayers</em>.
                </p>
                <br />
                <p className="project-further-info">
                  The backend architecture consists of dual services: an{" "}
                  <em className="text-blue-500 not-italic">Express.js</em>{" "}
                  server running on{" "}
                  <em className="text-blue-500 not-italic">Node.js</em> and a{" "}
                  <em className="text-blue-500 not-italic">Flask</em> server
                  handling machine learning operations with{" "}
                  <em className="text-blue-500 not-italic">TensorFlow</em>,{" "}
                  <em className="text-blue-500 not-italic">NumPy</em>,{" "}
                  <em className="text-blue-500 not-italic">Matplotlib</em>,{" "}
                  <em className="text-blue-500 not-italic">SciPy</em>,{" "}
                  <em className="text-blue-500 not-italic">OpenCV</em>, and{" "}
                  <em className="text-blue-500 not-italic">h5py</em>. The system
                  integrates{" "}
                  <em className="text-blue-500 not-italic">
                    Visual Crossing API
                  </em>{" "}
                  and{" "}
                  <em className="text-blue-500 not-italic">OpenWeather API</em>{" "}
                  for weather data, and is deployed on{" "}
                  <em className="text-blue-500 not-italic">Railway</em>.
                </p>
              </div>

              <FireCastLinks />
              <FireCastStack />
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

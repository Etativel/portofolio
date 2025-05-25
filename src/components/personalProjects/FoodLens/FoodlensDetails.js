/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import "./FoodlensDetails.scss";
import {useContext, useState, useEffect} from "react";
import FoodlensStack from "./FoodlensStack";
import FoodlensLinks from "./FoodlensLinks";
import {motion} from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import StyleContext from "../../../contexts/StyleContext";
import {ChevronRight, ChevronLeft} from "lucide-react";

import foodlens1 from "../../../assets/projectsImage/foodlens_img/foodlens_1.jpg";
import foodlens2 from "../../../assets/projectsImage/foodlens_img/foodlens_2.jpg";
import foodlens3 from "../../../assets/projectsImage/foodlens_img/foodlens_3.jpg";
import foodlens4 from "../../../assets/projectsImage/foodlens_img/foodlens_4.jpg";
import foodlens5 from "../../../assets/projectsImage/foodlens_img/foodlens_5.jpg";

export default function FoodlensDetails() {
  const {isDark} = useContext(StyleContext);
  const isLg = useMediaQuery("(min-width: 1024px)");
  const [imgIndex, setImgIndex] = useState(0);

  const projectImage = [foodlens2, foodlens1, foodlens3, foodlens4, foodlens5];

  function handleImageIndexChange(increase) {
    setImgIndex(prev => {
      if (increase) {
        return (prev + 1) % projectImage.length;
      } else {
        return (prev - 1 + projectImage.length) % projectImage.length;
      }
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex(prev => (prev + 1) % projectImage.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projectImage.length]);

  return (
    <span className="project-wrapper">
      <h1 className="project-index">1.</h1>
      <div className={`project-container ${isDark ? "dark-theme" : ""}`}>
        <div className="project-shadow-bg"></div>
        <div className="project-text">
          <div>
            <h1 className="project-title">FoodLens</h1>
            <h2 className="project-subtitle">
              Smart nutrition tracking with AI-powered food recognition
            </h2>
          </div>
          <div className="project-content">
            <div className="project-info-container">
              <div>
                <h2 className="project-about">About</h2>
                <p className="project-info">
                  FoodLens is an intelligent food scanning app that helps users
                  instantly get nutrition facts, track calories, and manage
                  their diet. It features secure JWT-based authentication with
                  Google OAuth integration, a responsive{" "}
                  <em className="text-blue-500 not-italic"> React</em> UI
                  designed with a{" "}
                  <em className="text-blue-500 not-italic"> mobile-first</em>{" "}
                  approach, built with{" "}
                  <em className="text-blue-500 not-italic">Vite</em>, and AI
                  tools for food recognition and nutrition analysis. Users can
                  scan food with their camera, log daily intake, set calorie
                  goals, browse recipes, and track progress with interactive
                  charts, backed using{" "}
                  <em className="text-blue-500 not-italic">Express.js</em> on{" "}
                  <em className="text-blue-500 not-italic">Node.js</em> with{" "}
                  <em className="text-blue-500 not-italic">Prisma ORM</em> and{" "}
                  <em className="text-blue-500 not-italic">PostgreSQL</em>.
                </p>
                <br />
                <p className="project-further-info">
                  Food recognition is powered by a{" "}
                  <em className="text-blue-500 not-italic">Flask</em> API using{" "}
                  <em className="text-blue-500 not-italic">PyTorch</em> and{" "}
                  <em className="text-blue-500 not-italic">Transformers</em>,
                  with image processing handled by{" "}
                  <em className="text-blue-500 not-italic">Pillow</em> and AI
                  scanning via the{" "}
                  <em className="text-blue-500 not-italic">OpenAI SDK</em> and{" "}
                  <em className="text-blue-500 not-italic">Hugging Face</em>{" "}
                  model . Image uploads are managed through{" "}
                  <em className="text-blue-500 not-italic">Multer</em> and{" "}
                  <em className="text-blue-500 not-italic">Cloudinary</em>, with{" "}
                  <em className="text-blue-500 not-italic">Supabase</em>{" "}
                  integration for database hosting. The frontend features data
                  visualization using{" "}
                  <em className="text-blue-500 not-italic">Chart.js</em> and{" "}
                  <em className="text-blue-500 not-italic">Recharts</em>,
                  responsive styling with{" "}
                  <em className="text-blue-500 not-italic">Tailwind CSS</em>.
                  The platform includes a premium credit system, email
                  verification via{" "}
                  <em className="text-blue-500 not-italic">Nodemailer</em>, rate
                  limiting, and is deployed on{" "}
                  <em className="text-blue-500 not-italic">Railway</em> for
                  hosting.
                </p>
              </div>

              <FoodlensLinks />
              <FoodlensStack />
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
              src={foodlens1}
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

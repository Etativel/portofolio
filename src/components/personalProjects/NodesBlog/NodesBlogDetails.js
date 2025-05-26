/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import "./NodesBlogDetails.scss";
import {useContext, useState} from "react";
import NodesBlogStack from "./NodesBlogStack";
import NodesBlogLinks from "./NodesBlogLinks";
import {motion} from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import StyleContext from "../../../contexts/StyleContext";
import {ChevronRight, ChevronLeft} from "lucide-react";

import {
  node1_b,
  node2_b,
  node3_b,
  node4_b,
  node5_b,
  node1_l,
  node2_l,
  node3_l,
  node4_l,
  node5_l
} from "../../../assets/projectsImage";

export default function NodesBlogDetails() {
  const {isDark} = useContext(StyleContext);
  const isLg = useMediaQuery("(min-width: 1024px)");
  const [imgIndex, setImgIndex] = useState(0);
  // const [isHovered, setIsHovered] = useState(false);

  const projectImageL = [node1_l, node2_l, node3_l, node4_l, node5_l];
  const projectImageB = [node1_b, node2_b, node3_b, node4_b, node5_b];

  function handleImageIndexChange(increase) {
    setImgIndex(prev => {
      if (increase) {
        return (prev + 1) % projectImageL.length;
      } else {
        return (prev - 1 + projectImageL.length) % projectImageL.length;
      }
    });
  }

  // useEffect(() => {
  //   if (isHovered) return;
  //   const interval = setInterval(() => {
  //     setImgIndex(prev => (prev + 1) % projectImageL.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [projectImageL.length, isHovered]);

  return (
    <span className="project-wrapper">
      <h1 className="project-index">2.</h1>
      <div className={`project-container ${isDark ? "dark-theme" : ""}`}>
        <div className="project-shadow-bg"></div>
        <div className="project-text">
          <div>
            <h1 className="project-title">Nodes - A Full Stack Blog</h1>
            <h2 className="project-subtitle">Blog with moderation system</h2>
          </div>
          <div className="project-content">
            <div className="project-info-container">
              <div>
                <h2 className="project-about">About</h2>
                <p className="project-info">
                  Nodes is a modern blogging platform where writers can easily
                  share ideas, stories, and insights. It features secure,
                  JWT-based authentication with cookie sessions, a clean
                  React-powered UI, and powerful tools for creating, reading,
                  commenting, bookmarking, and reacting to content. Authors can
                  customize their profiles, follow other writers, and toggle
                  between light/dark themes, all backed by an{" "}
                  <em className="text-blue-500 not-italic">Express.js</em> API
                  on <em className="text-blue-500 not-italic">Node.js</em> with{" "}
                  <em className="text-blue-500 not-italic">Prisma</em> and{" "}
                  <em className="text-blue-500 not-italic">PostgreSQL</em>.
                </p>
                <br />
                <p className="project-further-info">
                  Content is authored via rich-text editors
                  <em className="text-blue-500 not-italic">TinyMCE</em> and{" "}
                  <em className="text-blue-500 not-italic">TipTap</em>, with
                  seamless image uploads handled by{" "}
                  <em className="text-blue-500 not-italic">Cloudinary</em>. On
                  the admin side, a{" "}
                  <em className="text-blue-500 not-italic">Material UI</em>{" "}
                  dashboard with{" "}
                  <em className="text-blue-500 not-italic">Tailwind</em> for
                  styling and
                  <em className="text-blue-500 not-italic">Chart.js</em> for
                  visualization, it also provide analytics, user moderation,
                  role-based access control, and featured content management.
                  Frontend styling is powered by
                  <em className="text-blue-500 not-italic">CSS</em>, bundling
                  via <em className="text-blue-500 not-italic">Vite</em>, and
                  client-side routing with{" "}
                  <em className="text-blue-500 not-italic">React Router</em>.
                </p>
              </div>

              <NodesBlogLinks />
              <NodesBlogStack />
            </div>
          </div>
        </div>
        <div className={`project-image-wrapper`}>
          <motion.div
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
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
              src={isDark ? projectImageB[imgIndex] : projectImageL[imgIndex]}
              alt="project image"
              className="project-img"
              aria-label="project mobile view"
            />
          </motion.div>
          <div
            className="carousel-btn-container"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          >
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

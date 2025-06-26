/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import "./FileUploaderDetails.scss";
import {useContext, useState} from "react";
import FileUploaderStack from "./FileUploaderStack";
import FileUploaderLinks from "./FileUploaderLinks";
import {motion} from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import StyleContext from "../../../contexts/StyleContext";
import {ChevronRight, ChevronLeft} from "lucide-react";

// import {fu1, fu2, fu3} from "../../../assets/projectsImage";

export default function FileUploaderDetails() {
  const {isDark} = useContext(StyleContext);
  const isLg = useMediaQuery("(min-width: 1024px)");
  const [imgIndex, setImgIndex] = useState(0);

  const projectImage = [
    "https://res.cloudinary.com/dgndmndq3/image/upload/v1748264481/1_uswy3p.jpg",
    "https://res.cloudinary.com/dgndmndq3/image/upload/v1748264481/2_qgpowa.jpg",
    "https://res.cloudinary.com/dgndmndq3/image/upload/v1748264481/3_bo35zx.jpg"
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
      <h1 className="project-index">4.</h1>
      <div className={`project-container ${isDark ? "dark-theme" : ""}`}>
        <div className="project-shadow-bg"></div>
        <div className="project-text">
          <div>
            <h1 className="project-title">CloudNest</h1>
            <h2 className="project-subtitle">
              A File Manager with Cloud Storage and Sharing
            </h2>
          </div>
          <div className="project-content">
            <div className="project-info-container">
              <div>
                <h2 className="project-about">About</h2>
                <p className="project-info">
                  CloudNest is a file manager that handles file and folder
                  operations, cloud uploads, and URL sharing. It implements user
                  authentication with{" "}
                  <em className="text-blue-500 not-italic">Passport.js</em> and{" "}
                  <em className="text-blue-500 not-italic">bcrypt</em> hashing,
                  renders views with{" "}
                  <em className="text-blue-500 not-italic">EJS</em> templates,
                  and stores files on{" "}
                  <em className="text-blue-500 not-italic">Cloudinary</em>.
                  Users can create, delete, and rename files and folders, upload
                  files with public URLs for sharing, and access their files
                  through protected routes, built with{" "}
                  <em className="text-blue-500 not-italic">Express.js</em> and{" "}
                  <em className="text-blue-500 not-italic">Node.js</em> using{" "}
                  <em className="text-blue-500 not-italic">Prisma ORM</em> with{" "}
                  <em className="text-blue-500 not-italic">PostgreSQL</em>.
                </p>
                <br />
                <p className="project-further-info">
                  File uploads use{" "}
                  <em className="text-blue-500 not-italic">Multer</em>{" "}
                  middleware with{" "}
                  <em className="text-blue-500 not-italic">Cloudinary</em> API
                  integration. Sessions are managed with{" "}
                  <em className="text-blue-500 not-italic">express-session</em>{" "}
                  and <em className="text-blue-500 not-italic">Passport.js</em>{" "}
                  handles login/logout flow. Database operations use{" "}
                  <em className="text-blue-500 not-italic">Prisma ORM</em>{" "}
                  connected to{" "}
                  <em className="text-blue-500 not-italic">
                    Supabase PostgreSQL
                  </em>
                  . Views are server-rendered with{" "}
                  <em className="text-blue-500 not-italic">EJS</em> templates
                  and <em className="text-blue-500 not-italic">CSS</em> styling.
                  The app includes flash messaging for user feedback,
                  authentication middleware, and full CRUD operations for files
                  and folders.
                </p>
              </div>

              <FileUploaderLinks />
              <FileUploaderStack />
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

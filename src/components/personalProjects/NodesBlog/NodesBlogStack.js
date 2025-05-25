import "./NodesBlogStack.scss";
import {useContext} from "react";
import StyleContext from "../../../contexts/StyleContext";

import {
  javascript,
  css,
  expressIconBlack,
  expressIconWhite,
  postgresIconBlack,
  nodeIcon,
  prisma,
  tailwind,
  vite,
  chartjs,
  materialui,
  reactRouterBlack,
  reactRouterWhite,
  postgresIconWhite,
  passport,
  cloudinary,
  railwayDark,
  railwayLight
} from "../../../assets/projectStackIcon";

function NodesBlogStack() {
  const {isDark} = useContext(StyleContext);
  const icons = [
    // Core language & build
    {src: javascript, alt: "javascript"},
    {src: vite, alt: "vite"},

    // Styling
    {src: css, alt: "css"},
    {src: tailwind, alt: "tailwind css"},

    // UI components & client libs
    {src: materialui, alt: "material ui"},
    {
      src: isDark ? reactRouterWhite : reactRouterBlack,
      alt: "react router"
    },
    {src: chartjs, alt: "chart.js"},

    // Server runtime & framework
    {src: nodeIcon, alt: "node.js"},
    {
      src: isDark ? expressIconWhite : expressIconBlack,
      alt: "express.js"
    },

    // Auth & ORM
    {src: passport, alt: "passport.js"},
    {src: prisma, alt: "prisma orm"},

    // Database
    {
      src: isDark ? postgresIconWhite : postgresIconBlack,
      alt: "postgresql"
    },

    // Storage/Media
    {src: cloudinary, alt: "cloudinary"},

    // Deployment
    {
      src: isDark ? railwayDark : railwayLight,
      alt: "Railway"
    }
  ];

  return (
    <div className="stack-container">
      <span className="stack-title">Key Technologies</span>
      <div className="tech-icons">
        {icons.map(({src, alt}) => (
          <img key={alt} className="tech-icon" src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
}

export default NodesBlogStack;

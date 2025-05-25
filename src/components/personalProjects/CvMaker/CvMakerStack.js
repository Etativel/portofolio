import {useContext} from "react";
import "./CvMakerStack.scss";
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
  reactRouterBlack,
  reactRouterWhite,
  postgresIconWhite,
  passport,
  cloudinary,
  flaskDark,
  flaskLight,
  pyTorch,
  openAiLight,
  openAiDark,
  huggingFace,
  railwayDark,
  railwayLight
} from "../../../assets/projectStackIcon";

export default function CvMakerStack() {
  const {isDark} = useContext(StyleContext);
  const icons = [
    // Core language & bundler
    {src: javascript, alt: "javascript"},
    {src: vite, alt: "vite"},

    // Styling
    {src: css, alt: "css"},
    {src: tailwind, alt: "tailwind css"},

    // UI / client-side libraries
    {
      src: isDark ? reactRouterWhite : reactRouterBlack,
      alt: "react router"
    },
    {src: chartjs, alt: "chart.js"},

    // AI / ML stack (Python)
    {src: pyTorch, alt: "PyTorch"},
    {src: huggingFace, alt: "Hugging Face"},
    {
      src: isDark ? openAiDark : openAiLight,
      alt: "OpenAI SDK"
    },
    {
      src: isDark ? flaskDark : flaskLight,
      alt: "flask"
    },

    // Server runtime & framework (Node)
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

    // Media / storage
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

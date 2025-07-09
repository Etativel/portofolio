import {useContext} from "react";
import "./FireCastStack.scss";
import StyleContext from "../../../contexts/StyleContext";

import {
  javascript,
  css,
  expressIconBlack,
  expressIconWhite,
  nodeIcon,
  tailwind,
  vite,
  chartjs,
  maptilerNoText,
  openlayerIcon,
  flaskDark,
  flaskLight,
  railwayDark,
  railwayLight,
  reactRouterBlack,
  reactRouterWhite,
  tensorflowIcon,
  openCvIcon,
  openCvWhite,
  typeScript
} from "../../../assets/projectStackIcon";

export default function FireCastStack() {
  const {isDark} = useContext(StyleContext);
  const icons = [
    // Core language & bundler
    {src: typeScript, alt: "typeScript"},
    {src: javascript, alt: "javascript"},
    {src: vite, alt: "vite"},

    // Styling
    {src: css, alt: "css"},
    {src: tailwind, alt: "tailwind css"},

    // UI / client-side libraries
    {src: chartjs, alt: "chart.js"},
    {src: openlayerIcon, alt: "openlayer"},
    {src: maptilerNoText, alt: "maptiler"},

    {src: isDark ? reactRouterWhite : reactRouterBlack, alt: "reactrouter"},

    // AI / ML stack (Python)
    {src: isDark ? openCvWhite : openCvIcon, alt: "opencv"},
    {src: tensorflowIcon, alt: "Tensorflow"},

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

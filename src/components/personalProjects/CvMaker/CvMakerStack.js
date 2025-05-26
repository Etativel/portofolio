import {useContext} from "react";
import "./CvMakerStack.scss";
import StyleContext from "../../../contexts/StyleContext";

import {
  javascript,
  css,
  vite,
  vercelIconBlack,
  vercelIconWhite,
  reactIcon,
  htmlIcon
} from "../../../assets/projectStackIcon";

export default function CvMakerStack() {
  const {isDark} = useContext(StyleContext);
  const icons = [
    // Core language & bundler
    {src: javascript, alt: "JavaScript"},
    {src: reactIcon, alt: "React Js"},
    {src: vite, alt: "Vite"},

    // Styling
    {src: htmlIcon, alt: "HTML"},
    {src: css, alt: "CSS"},

    // Deployment
    {src: isDark ? vercelIconWhite : vercelIconBlack, alt: "Railway"}
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

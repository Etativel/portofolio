import {useContext} from "react";
import "./FileUploaderStack.scss";
import StyleContext from "../../../contexts/StyleContext";

import {
  javascript,
  css,
  expressIconBlack,
  expressIconWhite,
  postgresIconBlack,
  nodeIcon,
  prisma,
  postgresIconWhite,
  passport,
  cloudinary,
  railwayDark,
  railwayLight
} from "../../../assets/projectStackIcon";

export default function FileUploaderStack() {
  const {isDark} = useContext(StyleContext);
  const icons = [
    // Core language
    {src: javascript, alt: "javascript"},

    // Styling
    {src: css, alt: "css"},

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

    // Cloud storage
    {src: cloudinary, alt: "cloudinary"},
    {src: isDark ? railwayDark : railwayLight, alt: "railway"}
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

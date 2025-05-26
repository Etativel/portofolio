import {Fade} from "react-reveal";
import "./ScrollAnimation.scss";
import {greeting} from "../../portfolio";
import ScrollAnimation from "../../components/scrollAnimation/scrollAnimation";

export default function ScrollAnimationContainer() {
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <ScrollAnimation />
        </div>
      </div>
    </Fade>
  );
}

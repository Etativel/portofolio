import "./FireCastLinks.scss";
import {useContext, useEffect, useState} from "react";
import Client from "../../svg/Client";
import StyleContext from "../../../contexts/StyleContext";

export default function FireCastLinks() {
  const {isDark} = useContext(StyleContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className={isDark ? "link-wrapper dark" : "link-wrapper"}>
        <a
          href="https://github.com/Etativel/FireCast"
          target="_blank"
          rel="noreferrer"
        >
          <div className="link-button-wrapper">
            <Client className="icon" />
            Repository Code
          </div>
        </a>

        <a
          href="https://firecast.up.railway.app"
          target="_blank"
          rel="noreferrer"
        >
          <button className="live-button">
            Live Client
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 96 960 960"
              width="24"
            >
              <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />
            </svg>
          </button>
        </a>
      </div>
    )
  );
}

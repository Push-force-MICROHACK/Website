import React from "react";
import "./Iframe.css";
import picture from "../../assets/D3-2.svg";
export default function Iframe() {
  return (
    <div className="iframesection">
      <iframe
        src="https://www.youtube.com/embed/SrdkyYHStbg?si=8YLVa2jIUTk1oUBC"
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="D3image2">
        <img src={picture} alt="3dlogo" className="img3D2" />
      </div>
    </div>
  );
}

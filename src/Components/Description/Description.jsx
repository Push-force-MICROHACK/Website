import React from "react";
import "./Description.css";
import D3 from "../../assets/D3.svg";
export default function Description() {
  return (
    <div className="font">
      <div className="bg1"></div>
      <div className="bg2"></div>
      <div className="text">
        <h2>
          Synchronize Efficiency, Elevate your GED system with{" "}
          <span className="cognicore">CogniCore</span>!
        </h2>
      </div>
      <div className="text2">
        <h4>
          AI-powered API for GED systems oriented for high-performing teams.
        </h4>
      </div>
      <div className="buttons2">
        <button className="button2 ">Get Your API</button>
      </div>
      <div className="D3image">
        <img src={D3} alt="3d logo" className="img3D" />
      </div>
    </div>
  );
}

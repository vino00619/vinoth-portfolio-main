import React from "react";

export function AboutMe() {
  return (
    <div style={{ backgroundColor: "#212529" }}>
      
        <div className="topic" data-aos="zoom-in">
          <span style={{ color: "white" }}>About</span>
          <span style={{ paddingLeft: "8px", color: "#38ef7d" }}>Me</span>
        </div>
        <div>
          <p className="mySelfAbout" data-aos="zoom-in">
            I am a determined and self-motivated person with a Masters degree in Remote Sensing and Geomatics. 
            I have learned full stack web development and have hands-on experience.
          </p>
        </div>
        <div className="topic" style={{ paddingTop: "0px" }} data-aos="zoom-in">
          <span style={{ paddingLeft: "8px", color: "#38ef7d" }}>Interest</span>
        </div>
        <div>
          <ul className="mySelfAbout" data-aos="zoom-in">
             <li>Tekking</li>
             <li>Reading Books</li>
             <li>Badminton</li>
          </ul>
        </div>
        <div className="topic" style={{ paddingTop: "0px" }} data-aos="zoom-in">
        <span style={{ color: "#38ef7d" }}>Languages</span>
          <span style={{ paddingLeft: "8px", color: "white" }}>Known</span>
        </div>
        <div data-aos="zoom-in">
          <ul className="mySelfAbout">
            <li>Tamil - Native or Bilingual Proficiency.</li>
            <li>English - Full Professional Proficiency.</li>
            <li>Hindi - Limited Working Proficiency.</li>
            <li>French - Elementary Proficiency.</li>
          </ul>
        </div>
    </div>
  );
}

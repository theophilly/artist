import React from "react";
import "./styles/AboutSection.css";

function AboutSection(props) {
  return (
    <div className="aboutSectionContainer">
      <p className="aboutSection">Welcome To My Website</p>
      <p className="aboutDetails">
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  );
}

export default AboutSection;

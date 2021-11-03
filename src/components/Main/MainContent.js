import React, { Component } from "react";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";

class MainContent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={ContainerStyle} className="mainContainer">
        <PersonalInformation />
        <Experience />
        <Education />
        <Skills />
      </div>
    );
  }
}

const ContainerStyle = {
  padding: "40px",
};

export default MainContent;

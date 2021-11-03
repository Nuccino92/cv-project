import React, { Component } from "react";
import ExperienceForm from "./ExperienceForm";

class Experience extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="experienceContainer">
        <h3>Work Experience</h3>
        <div className="work">
          <ExperienceForm />
        </div>
        <button>Add</button>
      </div>
    );
  }
}

export default Experience;

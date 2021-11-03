import React, { Component } from "react";
import SkillsForm from "./SkillsForm";

class Skills extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="skillsContainer">
        <h3>Skills</h3>
        <div className="skills">
          <SkillsForm />
        </div>
        <button>Add</button>
      </div>
    );
  }
}

export default Skills;

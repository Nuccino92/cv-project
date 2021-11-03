import React, { Component } from "react";

class SkillsForm extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form className="skillsForm">
        <label htmlFor="skills">Skills</label>
        <input
          type="text"
          id="skills"
          placeholder="Creative thinking, Excel in groups, React ;)"
        ></input>
      </form>
    );
  }
}

export default SkillsForm;

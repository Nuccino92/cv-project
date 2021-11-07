import React, { Component } from "react";
import SkillsForm from "./SkillsForm";

class Skills extends Component {
  render() {
    const { numSkillsForms } = this.props;
    const forms = [];

    for (let i = 0; i < numSkillsForms; i += 1) {
      forms.push(
        <SkillsForm
          handleChange={(e) => this.props.handleChange(e, i)}
          key={i}
          number={i}
        />
      );
    }

    return (
      <div className="skillsContainer">
        <h3>Skills</h3>
        <div className="skills">{forms}</div>
        <button name={"numSkillsForms"} onClick={this.props.addForm}>
          Add
        </button>
        <button name={"numSkillsForms"} onClick={this.props.removeForm}>
          Remove
        </button>
      </div>
    );
  }
}

export default Skills;

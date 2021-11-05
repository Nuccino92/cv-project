import React, { Component } from "react";
import ExperienceForm from "./ExperienceForm";

class Experience extends Component {
  render() {
    const { numExperienceForms } = this.props;
    const forms = [];
    for (let i = 0; i < numExperienceForms; i += 1) {
      forms.push(<ExperienceForm key={i} number={i} />);
    }

    return (
      <div className="experienceContainer">
        <h3>Work Experience</h3>
        <div className="work">{forms}</div>
        <button name={"numExperienceForms"} onClick={this.props.addForm}>
          Add
        </button>
        <button name={"numExperienceForms"} onClick={this.props.removeForm}>
          Remove
        </button>
      </div>
    );
  }
}

export default Experience;

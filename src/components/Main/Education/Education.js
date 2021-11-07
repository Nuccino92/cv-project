import React, { Component } from "react";
import EducationForm from "./EducationForm";

class Education extends Component {
  render() {
    const { numEducationForms } = this.props;
    const forms = [];

    for (let i = 0; i < numEducationForms; i += 1) {
      forms.push(
        <EducationForm
          handleChange={(e) => this.props.handleChange(e, i)}
          key={i}
          number={i}
        />
      );
    }

    return (
      <div className="educationContainer">
        <h3>Education and Training</h3>
        <div className="education">{forms}</div>
        <button name={"numEducationForms"} onClick={this.props.addForm}>
          Add
        </button>
        <button name={"numEducationForms"} onClick={this.props.removeForm}>
          Remove
        </button>
      </div>
    );
  }
}

export default Education;

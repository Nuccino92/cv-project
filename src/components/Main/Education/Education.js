import React, { Component } from "react";
import EducationForm from "./EducationForm";

class Education extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="educationContainer">
        <h3>Education and Training</h3>
        <div className="education">
          <EducationForm />
        </div>
        <button>Add</button>
      </div>
    );
  }
}

export default Education;

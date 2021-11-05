import React, { Component } from "react";

class EducationForm extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form className="educationForm">
        <label htmlFor="credentials">Aquired Credentials</label>
        <input
          type="text"
          id="credentials"
          placeholder="Degree/Diploma etc"
        ></input>

        <label htmlFor="organization">Organization</label>
        <input
          type="text"
          id="organization"
          placeholder="University/College etc"
        ></input>

        <label htmlFor="fieldOfStudy">Field of Study</label>
        <input
          type="text"
          id="fieldOfStudy"
          placeholder="Short Description"
        ></input>

        <label htmlFor="startDate">Start:</label>
        <input type="date" id="startDate"></input>

        <label htmlFor="toDate">To:</label>
        <input type="date" id="toDate"></input>
      </form>
    );
  }
}

export default EducationForm;

import React, { Component } from "react";

class ExperienceForm extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form className="workForm">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Job Name"></input>

        <label htmlFor="employer">Employer</label>
        <input type="text" id="employer" placeholder="Google"></input>

        <label htmlFor="startDate">Start:</label>
        <input type="date" id="startDate"></input>

        <label htmlFor="toDate">To:</label>
        <input type="date" id="toDate"></input>

        <label htmlFor="jobDescription">Job Description</label>
        <textarea id="jobDescription" rows="6"></textarea>
      </form>
    );
  }
}

export default ExperienceForm;

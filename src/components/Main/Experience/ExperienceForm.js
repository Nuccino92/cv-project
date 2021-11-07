import React from "react";

const ExperienceForm = ({ handleChange }) => {
  return (
    <form className="workForm">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={handleChange}
        placeholder="Job Name"
      ></input>

      <label htmlFor="employer">Employer</label>
      <input
        type="text"
        name="employer"
        id="employer"
        onChange={handleChange}
        placeholder="Google"
      ></input>

      <label htmlFor="startDate">Start:</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        onChange={handleChange}
      ></input>

      <label htmlFor="toDate">To:</label>
      <input
        type="date"
        name="toDate"
        id="toDate"
        onChange={handleChange}
      ></input>

      <label htmlFor="jobDescription">Job Description</label>
      <textarea
        id="jobDescription"
        name="jobDescription"
        rows="6"
        onChange={handleChange}
      ></textarea>
    </form>
  );
};

export default ExperienceForm;

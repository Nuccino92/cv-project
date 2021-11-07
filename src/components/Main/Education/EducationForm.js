import React from "react";

const EducationForm = ({ handleChange }) => {
  return (
    <form className="educationForm">
      <label htmlFor="credentials">Aquired Credentials</label>
      <input
        type="text"
        name="credentials"
        id="credentials"
        onChange={handleChange}
        placeholder="Degree/Diploma etc"
      ></input>

      <label htmlFor="organization">Organization</label>
      <input
        type="text"
        name="organization"
        id="organization"
        onChange={handleChange}
        placeholder="University/College etc"
      ></input>

      <label htmlFor="fieldOfStudy">Field of Study</label>
      <input
        type="text"
        name="fieldOfStudy"
        id="fieldOfStudy"
        onChange={handleChange}
        placeholder="Short Description"
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
    </form>
  );
};

export default EducationForm;

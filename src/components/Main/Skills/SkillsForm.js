import React from "react";

const SkillsForm = ({ handleChange }) => {
  return (
    <form className="skillsForm">
      <label htmlFor="skills">Skills</label>
      <input
        type="text"
        name="skills"
        id="skills"
        onChange={handleChange}
        placeholder="Creative thinking, Excel in groups, React ;)"
      ></input>
    </form>
  );
};

export default SkillsForm;

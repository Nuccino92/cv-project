import React from "react";

const SkillsForm = () => {
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
};

export default SkillsForm;

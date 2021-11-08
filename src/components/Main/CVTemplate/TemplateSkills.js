import React from "react";

const TemplateSkills = ({ values }) => {
  return (
    <div className="tempSkills">
      <h3>Skill:</h3>
      <div className="skills">{values.skills}</div>
    </div>
  );
};

export default TemplateSkills;

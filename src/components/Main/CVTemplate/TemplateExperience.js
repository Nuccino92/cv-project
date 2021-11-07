import React from "react";

function TemplateExperience({ values }) {
  return (
    <div className="tempExperience">
      <div className="tempTitle">{values.title}</div>
      <div className="tempEmployer">{values.employer}</div>
      <div className="tempStartDate">{values.startDate}</div>
      <div className="tempToDate">{values.toDate}</div>
      <div className="tempJobDescription">{values.jobDescription}</div>
    </div>
  );
}

export default TemplateExperience;

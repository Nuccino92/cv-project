import React from "react";

function TemplateExperience({ values }) {
  return (
    <div className="tempExperience">
      <div className="tempPairContainer">
        <h3>Title:</h3>
        <h3>Employer:</h3>
        <div className="tempTitle">{values.title}</div>
        <div className="tempEmployer">{values.employer}</div>
      </div>

      <div className="tempPairContainer">
        <h3>Start:</h3>
        <h3>To:</h3>
        <div className="tempStartDate">{values.startDate}</div>
        <div className="tempToDate">{values.toDate}</div>
      </div>

      <h3>Job jobDescription:</h3>
      <div className="tempJobDescription">{values.jobDescription}</div>
    </div>
  );
}

export default TemplateExperience;

import React from "react";

const TemplateEducation = ({ values }) => {
  return (
    <div className="tempEducation">
      <div className="tempPairContainer">
        <h3>Aquired Credentials:</h3>
        <h3>Organization:</h3>
        <div className="credentials">{values.credentials}</div>
        <div className="organization">{values.organization}</div>
      </div>

      <h3>Field Of Study:</h3>
      <div className="fieldOfStudy">{values.fieldOfStudy}</div>

      <div className="tempPairContainer">
        <h3>Start:</h3>
        <h3>To:</h3>
        <div className="startDate">{values.startDate}</div>
        <div className="toDate">{values.toDate}</div>
      </div>
    </div>
  );
};

export default TemplateEducation;

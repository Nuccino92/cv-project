import React from "react";

const TemplateEducation = ({ values }) => {
  return (
    <div className="tempEducation">
      <div className="credentials">{values.credentials}</div>
      <div className="organization">{values.organization}</div>
      <div className="fieldOfStudy">{values.fieldOfStudy}</div>
      <div className="startDate">{values.startDate}</div>
      <div className="toDate">{values.toDate}</div>
    </div>
  );
};

export default TemplateEducation;

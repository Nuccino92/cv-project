import React, { Component } from "react";
import TemplateExperience from "./TemplateExperience";
import TemplateEducation from "./TemplateEducation";
import TemplateSkills from "./TemplateSkills";

class Template extends Component {
  render() {
    const { isActive } = this.props;
    const { handleActive } = this.props;

    return (
      <div
        className={isActive ? "modal active" : "modal"}
        onClick={handleActive}
      >
        <div className={isActive ? "template active" : "template"}>
          <div className="leftTempContainer">
            <div className="tempPhoto">
              <img src="silhouette.png" alt="Silhouette of Person" />

              <div className="tempNameContainer">
                <div className="tempFirstName">
                  {this.props.state.firstName}
                </div>
                <div className="tempLastName">{this.props.state.lastName}</div>
              </div>

              <div className="tempProfession">
                {this.props.state.profession}
              </div>
            </div>

            <div className="tempContactContainer">
              <h3 className="tempContactHeader">Contact</h3>
              <div className="tempPhone">{this.props.state.phone}</div>
              <div className="tempEmail">{this.props.state.email}</div>
              <div className="tempCity">{this.props.state.city}</div>
              <div className="tempProvince">{this.props.state.province}</div>
            </div>
          </div>
          <div className="rightTempContainer">
            <h3>Experience</h3>
            <div className="tempExperienceContainer">
              <TemplateExperience />
            </div>
            <h3>Education</h3>
            <div className="tempEducationContainer">
              <TemplateEducation />
            </div>
            <h3>Skills</h3>
            <div className="tempSkillsContainer">
              <TemplateSkills />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;

import React, { Component } from "react";
import TemplateExperience from "./TemplateExperience";
import TemplateEducation from "./TemplateEducation";
import TemplateSkills from "./TemplateSkills";

class Template extends Component {
  render() {
    const { isActive } = this.props;
    const { handleActive } = this.props;
    const { numExperienceForms } = this.props.state;
    const { numEducationForms } = this.props.state;
    const { numSkillsForms } = this.props.state;

    const expForms = [];
    for (let i = 0; i < numExperienceForms; i += 1) {
      expForms.push(
        <TemplateExperience values={this.props.values[i]} key={i} number={i} />
      );
    }

    const eduForms = [];
    for (let i = 0; i < numEducationForms; i += 1) {
      eduForms.push(
        <TemplateEducation values={this.props.values[i]} key={i} number={i} />
      );
    }

    const skillForms = [];
    for (let i = 0; i < numSkillsForms; i += 1) {
      skillForms.push(
        <TemplateSkills values={this.props.values[i]} key={i} number={i} />
      );
    }

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
            <div className="tempExperienceContainer">{expForms}</div>
            <h3>Education</h3>
            <div className="tempEducationContainer">{eduForms}</div>
            <h3>Skills</h3>
            <div className="tempSkillsContainer">{skillForms}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;

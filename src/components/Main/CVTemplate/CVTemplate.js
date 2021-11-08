import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import TemplateExperience from "./TemplateExperience";
import TemplateEducation from "./TemplateEducation";
import TemplateSkills from "./TemplateSkills";

class Template extends Component {
  constructor() {
    super();

    this.MouseOut = this.MouseOut.bind(this);
    this.MouseOver = this.MouseOver.bind(this);
  }

  MouseOver(event) {
    event.target.style.color = "#68CFCF";
  }

  MouseOut(event) {
    event.target.style.color = "#f54e42";
  }

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
        <div
          ref={(el) => (this.componentRef = el)}
          className={isActive ? "template active" : "template"}
        >
          <div className="leftTempContainer">
            <div className="tempPhoto">
              <img
                src={
                  this.props.state.photo === ""
                    ? "silhouette.png"
                    : this.props.state.photo
                }
                alt="Silhouette of Person"
              />

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
              <h3>Email</h3>
              <div className="tempEmail">{this.props.state.email}</div>
              <h3>Phone</h3>
              <div className="tempPhone">{this.props.state.phone}</div>
              <h3>City</h3>
              <div className="tempCity">{this.props.state.city}</div>
              <h3>Province/state</h3>
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
        <ReactToPrint
          trigger={() => {
            return (
              <button
                className={isActive ? "printBtn active" : "printBtn"}
                onMouseOver={this.MouseOver}
                onMouseOut={this.MouseOut}
                style={printBtnStyles}
              >
                PRINT
              </button>
            );
          }}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}

const printBtnStyles = {
  cursor: "pointer",
  fontFamily: "Arimo",
  fontSize: "23px",
  fontWeight: "bolder",
  color: "#f54e42",
};

export default Template;

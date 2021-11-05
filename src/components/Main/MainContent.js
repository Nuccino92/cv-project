import React, { Component } from "react";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Template from "./CVTemplate/CVTemplate";

class MainContent extends Component {
  constructor() {
    super();

    this.state = {
      numExperienceForms: 0,
      numEducationForms: 0,
      numSkillsForms: 0,

      firstName: "",
      lastName: "",
      profession: "",
      city: "",
      province: "",
      phone: "",
      email: "",
    };
    this.addForm = this.addForm.bind(this);
    this.removeForm = this.removeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addForm(event) {
    this.setState((prevState) => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  }

  removeForm(event) {
    if (this.state[event.target.name] === 0) return;
    this.setState((prevState) => ({
      [event.target.name]: prevState[event.target.name] - 1,
    }));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const handleActive = this.props.handleActive;
    const { isActive } = this.props;

    return (
      <div style={ContainerStyle} className="mainContainer">
        <PersonalInformation handleChange={this.handleChange} />
        <Experience
          numExperienceForms={this.state.numExperienceForms}
          addForm={this.addForm}
          removeForm={this.removeForm}
        />
        <Education
          numEducationForms={this.state.numEducationForms}
          addForm={this.addForm}
          removeForm={this.removeForm}
        />
        <Skills
          numSkillsForms={this.state.numSkillsForms}
          addForm={this.addForm}
          removeForm={this.removeForm}
        />
        <Template
          state={this.state}
          isActive={isActive}
          handleActive={handleActive}
        />
      </div>
    );
  }
}

const ContainerStyle = {
  padding: "40px",
  marginTop: "150px",
  position: "relative",
};

export default MainContent;

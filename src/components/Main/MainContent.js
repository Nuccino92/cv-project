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
      photo: "",

      values: [
        {
          title: "",
          employer: "",
          startDate: "",
          toDate: "",
          jobDescription: "",
          tempTitle: "",
          tempEmployer: "",
          tempStartDate: "",
          tempToDate: "",
          tempJobDescription: "",
          skills: "",
        },
      ],
    };

    this.addForm = this.addForm.bind(this);
    this.removeForm = this.removeForm.bind(this);
    this.handlePersonal = this.handlePersonal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
  }

  addForm(event) {
    const { name } = event.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));

    this.setState((prev) => ({
      values: [
        ...prev.values,
        {
          title: "",
          employer: "",
          startDate: "",
          toDate: "",
          jobDescription: "",
        },
      ],
    }));
  }

  removeForm(event) {
    const { name } = event.target;

    if (this.state[name] === 0) return;

    let values = [...this.state.values];
    values.splice(this.state[name], 1);

    this.setState({ values });

    this.setState((prevState) => ({
      [name]: prevState[name] - 1,
    }));
  }

  handlePhoto(event) {
    const { files } = event.target;

    if (files && files[0]) {
      this.setState({
        photo: URL.createObjectURL(files[0]),
      });
    }
  }

  handlePersonal(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleChange(event, i) {
    const { name, value } = event.target;
    let values = [...this.state.values];

    values[i][name] = value;

    this.setState({ values });
  }

  render() {
    const handleActive = this.props.handleActive;
    const { isActive } = this.props;

    return (
      <div style={ContainerStyle} className="mainContainer">
        <PersonalInformation
          handlePhoto={this.handlePhoto}
          handleChange={this.handlePersonal}
        />
        <Experience
          numExperienceForms={this.state.numExperienceForms}
          addForm={this.addForm}
          removeForm={this.removeForm}
          handleChange={this.handleChange}
        />
        <Education
          numEducationForms={this.state.numEducationForms}
          addForm={this.addForm}
          removeForm={this.removeForm}
          handleChange={this.handleChange}
        />
        <Skills
          numSkillsForms={this.state.numSkillsForms}
          addForm={this.addForm}
          removeForm={this.removeForm}
          handleChange={this.handleChange}
        />
        <Template
          state={this.state}
          isActive={isActive}
          handleActive={handleActive}
          values={this.state.values}
        />
      </div>
    );
  }
}

const ContainerStyle = {
  padding: "40px 40px 40px 230px",
  marginTop: "150px",
  position: "relative",
};

export default MainContent;

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
      firstName: "",
      lastName: "",
      profession: "",
      city: "",
      province: "",
      phone: "",
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
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
        <Experience />
        <Education />
        <Skills />
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

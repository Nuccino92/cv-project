import React, { Component } from "react";
import ExperienceForm from "./ExperienceForm";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      numForms: 0,
    };

    this.addForm = this.addForm.bind(this);
    this.removeForm = this.removeForm.bind(this);
  }

  addForm() {
    this.setState({
      numForms: this.state.numForms + 1,
    });
  }

  removeForm() {
    if (this.state.numForms === 0) return;
    const number = this.state.numForms - 1;
    this.setState({
      numForms: number,
    });
  }

  render() {
    const forms = [];

    for (let i = 0; i < this.state.numForms; i += 1) {
      forms.push(<ExperienceForm key={i} number={i} />);
    }

    return (
      <div className="experienceContainer">
        <h3>Work Experience</h3>
        <div className="work">{forms}</div>
        <button onClick={this.addForm}>Add</button>
        <button onClick={this.removeForm}>Remove</button>
      </div>
    );
  }
}

export default Experience;

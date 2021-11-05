import React, { Component } from "react";
import SkillsForm from "./SkillsForm";

class Skills extends Component {
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
      forms.push(<SkillsForm key={i} number={i} />);
    }

    return (
      <div className="skillsContainer">
        <h3>Skills</h3>
        <div className="skills">{forms}</div>
        <button onClick={this.addForm}>Add</button>
        <button onClick={this.removeForm}>Remove</button>
      </div>
    );
  }
}

export default Skills;

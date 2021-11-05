import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/Main/MainContent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false,
    };
    this.handleActive = this.handleActive.bind(this);
  }

  handleActive() {
    console.log(this.state.isActive);
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <div className="App">
        <Header handleActive={this.handleActive} />
        <MainContent
          handleActive={this.handleActive}
          isActive={this.state.isActive}
        />
      </div>
    );
  }
}

export default App;

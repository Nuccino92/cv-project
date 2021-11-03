import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/Main/MainContent";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;

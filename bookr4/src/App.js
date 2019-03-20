import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Bookr"/>
        <Home title="Our Recomended List" />
      </div>
    );
  }
}

export default App;

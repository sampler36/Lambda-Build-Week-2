import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Reviews from "./components/reviews";
import Books from "./components/books";
import Login from "./components/login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Bookr" />
          {/* <Route to="/" component={Home}/> */}
          {/* <Home title="Our Recomended List" /> */}
          <Route exact path="/" render={() => <Home title="Our Recomended List" />} />
          <Route path="/reviews" render={() => <Reviews />} />
          <Route path="/books" render={() => <Books />} />
          <Route path="/login" render={() => <Login title="Login Page" />} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

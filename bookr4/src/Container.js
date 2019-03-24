import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import BooksContainer from "./components/booksContainer";
import Reviews from "./components/reviews";
import Login from "./components/login";
import SignUp from "./components/signup";

class Container extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Bookr" />
          {/* <Route to="/" component={Home}/> */}
          {/* <Home title="Our Recomended List" /> */}
          <Route exact path="/" render={() => <Home title="Top selling" />} />
          <Route
            path="/books/"
            render={() => <BooksContainer title="Our Books" />}
          />
          <Route path="/signup/" render={() => <SignUp title="SignUp" />} />
          <Route path="/login/" render={() => <Login title="Login" />} />
          <Route path="/reviews" render={() => <Reviews title="Reviews" />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Container;

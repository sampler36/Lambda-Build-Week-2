import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import BooksContainer from "./components/booksContainer";
import Reviews from "./components/reviews";
import Login from "./components/login";
import Spinner from "./components/spinner.jsx";

class Container extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Bookr" />
          {/* <Route to="/" component={Home}/> */}
          {/* <Home title="Our Recomended List" /> */}
          <Route exact path="/" render={() => {
              if (localStorage.getItem("userToken")) {
                 return ( 
                 <Home title="Top selling" />
                     );
                     }
                return <Redirect to="/login" />;
                   }}
                    />
          <Spinner />
          <Route
            path="/books/"
            render={() => {
              if (localStorage.getItem("userToken")) {
                return ( 
                <BooksContainer title="Our Books" />
                );
              }
              return <Redirect to="/login" />;
            }}
          />
          <Route path="/login/" render={() => <Login title="Login" />} />

          <Route
            path="/reviews"
            render={() => {
              if (localStorage.getItem("userToken")) {
                return <Reviews title="Reviews" />;
              }
              return <Redirect to="/login" />;
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default Container;

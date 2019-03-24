import React from "react";

const Home = (props) => {
  return (
  <div className="main-content">
    <div className="container">
      <h1>{props.title}</h1>
      <div className="home-image"></div>
      <div className="thumbnail-container">
          <div className="home-thumbnail-1"></div>
          <div className="home-thumbnail-2"></div>
          <div className="home-thumbnail-3"></div>
      </div>
    </div>
  </div>
 );
}
export default Home;

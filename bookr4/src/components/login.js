import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => (
    <div className="main-content">
      <div className="container">
        <h1>{props.title}</h1>
      </div>
      <div className="row" id="Body">
        <div className=" columns right">

        <label>Username</label>
        <input type="text" name="username" placeholder="Username" />
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" />
        <button type="submit" className="button" value="Login" >Login</button>
        <Link  path="/signup">Registration</Link>
        </div>
      </div>
    </div>
  );
  export default Login;
  
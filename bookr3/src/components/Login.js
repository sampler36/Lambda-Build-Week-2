import React from 'react';
import { connect } from 'react-redux';
import { login } from '../state/actionCreators';
import '../App.css';

export class Login extends React.Component {
  userRef = React.createRef()

  passRef = React.createRef()

  onLogin = () => {
    const username = this.userRef.current.value;
    const password = this.passRef.current.value;

    this.props.login(username, password);
  }

  render() {
    return (
      <div className="log">
        <h3>Login</h3>
        {/* <div>username <input type="text" ref={this.userRef} /></div> */}
        {/* <div>password <input type="text" ref={this.passRef} /></div> */}

        <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" ref={this.userRef}   />
          <label for="email">Username</label>
        </div>

        <div className="input-field col s12 color-white">
          <input id="password" type="password" class="validate" ref={this.passRef} />
          <label for="password">Password</label>
        </div>
        <button onClick={this.onLogin}>Log in</button>
        {/* Create a Log Out button that flushes 'userToken' from local storage */}
        <button onClick={() => localStorage.clear()}>Log Out</button>
      </div>
      </div>
    );
  }
}

// 3 do the actual connecting

export default connect(null, { login })(Login);

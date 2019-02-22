import React, { Component } from "react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginText: ""
    };
  }

  changeHandler = e => {
    this.setState({ loginText: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.loginText);
    this.setState({ loginText: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          placeholder="Type in username..."
          value={this.state.loginText}
          onChange={this.changeHandler}
        />
        <button>Log in</button>
      </form>
    );
  }
}

export default LoginPage;

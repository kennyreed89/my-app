import React, { Component } from "react";

export default class FormBox extends Component {
  render() {
    return (
      <form id="logIn">
        <h2>Log In</h2>
        <input type="text" placeholder=" User ID" id="idInput"></input>
        <input type="text" placeholder=" Password" id="pwInput"></input>
        <button id="submitbutt">Submit</button>
      </form>
    );
  }
}

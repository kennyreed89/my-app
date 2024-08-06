import React, { Component } from "react";

export default class Navcomp extends Component {
  render() {
    return (
      <nav id="navBar">
        <ul>
          <li>
            {" "}
            <a href="./Home">Home</a>
          </li>
          <li>
            <a href="./Home">About</a>
          </li>
          <li>
            <a href="./Contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

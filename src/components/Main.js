import React, { Component } from "react";
import "../styles/Main.css";
import TableContainer from "./TableContainer";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <TableContainer />
      </div>
    );
  }
}

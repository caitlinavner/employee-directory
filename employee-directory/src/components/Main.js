import React, { Component } from "react";
import "../styles/Main.css";
import Table from "./Table";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Table />
      </div>
    );
  }
}
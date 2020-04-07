//basic outline of a built component
import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <h5> Search by letter, first or last name</h5>
            </div>
        )
    }
}
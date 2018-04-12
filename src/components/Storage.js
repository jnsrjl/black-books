import React, { Component } from "react";
import AddBook from "./AddBook";
import "./Storage.css";

class Storage extends Component {
  render() {
    return (
      <div className="Storage">
        <h2>Storage</h2>
        <AddBook />
      </div>
    );
  }
}

export default Storage;

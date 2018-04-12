import React, { Component } from "react";
import "./BookstoreManager.css";
import Storage from "./Storage";
import Bookshelf from "./Bookshelf";
import Order from "./Order";

class BookstoreManager extends Component {
  render() {
    return (
      <div className="BookstoreManager">
        <Storage />
        <Bookshelf />
        <Order />
      </div>
    );
  }
}

export default BookstoreManager;

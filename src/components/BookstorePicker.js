import React, { Component } from "react";
import "./BookstorePicker.css";
import book from "./book.svg";

class BookstorePicker extends Component {
  render() {
    return (
      <div className="BookstorePicker">
        <header className="header">
          <img src={book} className="logo" alt="logo" />
          <h1>Black Books</h1>
        </header>
        <form className="form">
          <h2>Please Enter A Bookstore</h2>
          <input
            className="textInput"
            type="text"
            required
            placeholder="Bookstore Name"
          />
          <button className="submitButton" type="submit">
            Open &rarr;
          </button>
        </form>
      </div>
    );
  }
}

export default BookstorePicker;

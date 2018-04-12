import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./BookstorePicker.css";
import book from "./book.svg";

/*
* This is a controlled component which is wrapped in withRouter HOC to get 
* access to history.push
*
*/

class BookstorePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  handleChange = e => {
    this.setState({ inputText: e.target.value });
  };

  /*
  * Loads the named bookstore
  */
  handleSubmit = () => {
    this.props.history.push(`bookstore/${this.state.inputText}`);
  };

  render() {
    return (
      <div className="BookstorePicker" onSubmit={this.handleSubmit}>
        <header className="header">
          <img src={book} className="logo" alt="logo" />
          <h1>Black Books</h1>
        </header>
        <form className="form">
          <h2>Please Enter A Bookstore</h2>
          <input
            className="textInput"
            placeholder="Bookstore Name"
            onChange={this.handleChange}
            required
            type="text"
          />
          <button className="submitButton" type="submit">
            Open &rarr;
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(BookstorePicker);

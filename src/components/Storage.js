import React, { Component } from "react";
import AddBook from "./AddBook";
import Book from "./Book";
import "./Storage.css";

class Storage extends Component {
  render() {
    return (
      <div className="Storage">
        <h2>Storage</h2>
        <AddBook onAddBookSubmit={this.props.onAddBookSubmit} />
        <ul className="booklist">
          {this.props.books.map((book, index) => (
            <Book details={book} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Storage;

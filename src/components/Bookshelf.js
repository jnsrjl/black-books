import React, { Component } from "react";
import Book from "./Book";
import "./Bookshelf.css";

class Bookshelf extends Component {
  render() {
    return (
      <div className="Bookshelf">
        <h2>Bookshelf</h2>
        <ul className="booklist">
          {this.props.books.map((book, index) => (
            <Book details={book} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Bookshelf;

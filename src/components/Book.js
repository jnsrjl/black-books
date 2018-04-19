import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  render() {
    const book = this.props.details;
    return (
      <li className="Book">
        <header className="header">
          <img className="image" src={book.image} alt="book cover" />
          <h2>
            {book.title} by <span className="author">{book.author}</span>
          </h2>
        </header>
        <p>{book.price}</p>
        <p>{book.description}</p>
      </li>
    );
  }
}

export default Book;

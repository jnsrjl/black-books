import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  render() {
    const book = this.props.details;
    return (
      <li className="Book" key={this.props.index}>
        <img className="image" src={book.image} alt="book cover" />
        <h2>
          {book.title} by {book.author}
        </h2>
        <p>{book.price}</p>
        <p>{book.description}</p>
      </li>
    );
  }
}

export default Book;

import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  render() {
    const book = this.props.details;
    const isInStock = book.availability === "inStock";
    const buttonText = isInStock ? "Add To Order" : "Not Yet Released";
    return (
      <li className="Book">
        <header className="header">
          <img className="image" src={book.image} alt="book cover" />
          <h2>
            {book.title} by <span className="author">{book.author}</span>
          </h2>
        </header>
        <span className="price">{book.price.toFixed(2)} €</span>
        <p>{book.description}</p>
        <button className="order-button" disabled={!isInStock}>
          {buttonText}
        </button>
      </li>
    );
  }
}

export default Book;

import React, { Component } from "react";
import AddBook from "./AddBook";
import "./Storage.css";

class Storage extends Component {
  render() {
    const bookList = this.props.books.map((book, index) => (
      <li key={index}>
        <ul className="book">
          <li>title: {book.title}</li>
          <li>price: {book.price}</li>
          <li>availability: {book.availability}</li>
          <li>description: {book.description}</li>
          <li>image: {book.image}</li>
        </ul>
      </li>
    ));

    return (
      <div className="Storage">
        <h2>Storage</h2>
        <AddBook onAddBookSubmit={this.props.onAddBookSubmit} />
        <ul className="booklist">{bookList}</ul>
      </div>
    );
  }
}

export default Storage;

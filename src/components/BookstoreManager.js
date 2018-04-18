import React, { Component } from "react";
import "./BookstoreManager.css";
import Storage from "./Storage";
import Bookshelf from "./Bookshelf";
import Order from "./Order";
import { sampleBooks } from "../helpers/sampleBooks";

class BookstoreManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: sampleBooks
    };
  }

  handleAddBookSubmit = book => {
    // Note that the new book goes at the start of the array
    this.setState(prevState => ({
      books: [book, ...prevState.books]
    }));
  };

  render() {
    return (
      <div className="BookstoreManager">
        <Storage
          books={this.state.books}
          onAddBookSubmit={this.handleAddBookSubmit}
        />
        <Bookshelf books={this.state.books} />
        <Order />
      </div>
    );
  }
}

export default BookstoreManager;

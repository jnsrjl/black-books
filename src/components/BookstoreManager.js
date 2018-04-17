import React, { Component } from "react";
import "./BookstoreManager.css";
import Storage from "./Storage";
import Bookshelf from "./Bookshelf";
import Order from "./Order";

class BookstoreManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: "Harry Potter And The Philosopher's Stone",
          price: 35.9,
          availability: "inStock",
          description: "Harry is an ordinary boy...",
          image: "noImage"
        },
        {
          title: "Harry Potter And The Philosopher's Stone",
          price: 35.9,
          availability: "inStock",
          description: "Harry is an ordinary boy...",
          image: "noImage"
        }
      ]
    };
  }

  handleAddBookSubmit = book => {
    // Note that the books goes on top of the array
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
        <Bookshelf />
        <Order />
      </div>
    );
  }
}

export default BookstoreManager;

import React, { Component } from "react";
import "./AddBook.css";

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      price: 0.0,
      availability: "releasedSoon",
      description: "",
      image: ""
    };
  }

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    // Prevent window reload
    e.preventDefault();

    // TODO: Validation
    const newBook = {
      title: this.state.title,
      author: this.state.author,
      price: this.state.price,
      availability: this.state.availability,
      description: this.state.description,
      image: this.state.image
    };

    this.props.onAddBookSubmit(newBook);

    this.setState({
      title: "",
      author: "",
      price: 0.0,
      availability: "",
      description: "",
      image: ""
    });
  };

  render() {
    return (
      <form className="AddBook" onSubmit={this.handleSubmit}>
        <input
          name="title"
          onChange={this.handleInputChange}
          placeholder="Book Title"
          type="text"
          value={this.state.title}
        />
        <input
          name="author"
          onChange={this.handleInputChange}
          placeholder="Book Author"
          type="text"
          value={this.state.author}
        />
        <input
          className="price"
          min="0"
          name="price"
          onChange={this.handleInputChange}
          placeholder="Book Price (€)"
          step="0.01"
          type="number"
          value={this.state.price}
        />
        <select
          name="availability"
          onChange={this.handleInputChange}
          value={this.state.availability}
        >
          <option value="inStock">In Stock</option>
          <option value="releasedSoon">Released Soon!</option>
        </select>
        <textarea
          maxLength="140"
          minLength="1"
          name="description"
          onChange={this.handleInputChange}
          placeholder="Book Description"
          rows="4"
          value={this.state.description}
        />
        <span>0</span>
        <input
          name="image"
          onChange={this.handleInputChange}
          placeholder="Book Image"
          type="text"
          value={this.state.image}
        />
        <button className="submit-button" type="submit">
          + Add Book
        </button>
      </form>
    );
  }
}

export default AddBook;

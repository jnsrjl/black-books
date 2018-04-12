import React, { Component } from "react";
import "./AddBook.css";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
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

  render() {
    return (
      <form className="AddBook">
        <input
          required
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={this.handleInputChange}
        />
        <input
          className="price"
          name="price"
          required
          type="number"
          placeholder="Book Price (€)"
          step="0.01"
          min="0"
          onChange={this.handleInputChange}
        />
        <select
          name="availability"
          value={this.state.availability}
          onChange={this.handleInputChange}
        >
          <option value="inStock">In Stock</option>
          <option value="releasedSoon">Released Soon!</option>
        </select>
        <textarea
          name="description"
          maxLength="140"
          minLength="1"
          placeholder="Book Description"
          required
          rows="4"
          onChange={this.handleInputChange}
        />
        <span>0</span>
        <input
          required
          type="text"
          name="image"
          placeholder="Book Image"
          onChange={this.handleInputChange}
        />
        <button required type="submit">
          + Add Book
        </button>
        <ul>
          <li>{this.state.title}</li>
          <li>{this.state.price}</li>
          <li>{this.state.availability}</li>
          <li>{this.state.description}</li>
          <li>{this.state.image}</li>
        </ul>
      </form>
    );
  }
}

export default AddBook;

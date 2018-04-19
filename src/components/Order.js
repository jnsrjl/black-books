import React, { Component } from "react";
import Clock from "./Clock";
import "./Order.css";

class Order extends Component {
  render() {
    return (
      <div className="Order">
        <Clock />
        <h2>Order</h2>
      </div>
    );
  }
}

export default Order;

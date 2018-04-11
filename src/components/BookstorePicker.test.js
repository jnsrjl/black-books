import React from "react";
import ReactDOM from "react-dom";
import BookstorePicker from "./BookstorePicker";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BookstorePicker />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from "react";
import ReactDOM from "react-dom";
import "sanitize.css";
import "./index.css";
import BookstorePicker from "./components/BookstorePicker";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<BookstorePicker />, document.getElementById("root"));
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "sanitize.css";
import "./index.css";
import BookstorePicker from "./components/BookstorePicker";
import BookstoreManager from "./components/BookstoreManager";
import FourOhFour from "./components/FourOhFour";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={BookstorePicker} />
      <Route path="/bookstore/:id" component={BookstoreManager} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

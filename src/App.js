import React, { Component } from "react";
import "./App.css";
import HomePage from "./HomePage";
import SearchBooks from "./SearchBooks";
import { Route } from "react-router-dom";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;

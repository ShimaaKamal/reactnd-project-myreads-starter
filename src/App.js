import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import HomePage from "./HomePage";
import SearchBooks from "./SearchBooks";
import { Route } from "react-router-dom";

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books: books
      }));
      console.log(books);
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <HomePage books={this.state.books}></HomePage>}
        />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;

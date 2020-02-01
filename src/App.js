import React, { Component } from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import HomePage from "./HomePage";
import SearchBooks from "./SearchBooks";
import { Route } from "react-router-dom";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books: books
      }));
    });
  }

  updateBookShelf = (shelf, bookToUpdate) => {
    this.setState(currentState => {
      const foundedBook = currentState.books.find(
        book => book.id === bookToUpdate.id
      );
      if (foundedBook) {
        foundedBook.shelf = shelf;
      } else {
        currentState.books.push(bookToUpdate);
      }
      return {
        books: currentState.books
      };
    });
    BooksAPI.update(bookToUpdate, shelf);
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              userBooks={this.state.books}
              onUpdate={this.updateBookShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              userBooks={this.state.books}
              onUpdate={this.updateBookShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

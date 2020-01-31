import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BooksList from "./BooksList";

class SearchBooks extends Component {
  state = {
    books: []
  };
  findBook = valueChanged => {
    console.log(valueChanged);
    if (valueChanged) {
      BooksAPI.search(valueChanged).then(books => {
        console.log(books);
        this.setState(() => ({
          books: books
        }));
      });
    }
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.findBook(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.books.length > 0 && (
            <BooksList books={this.state.books}></BooksList>
          )}
        </div>
      </div>
    );
  }
}
export default SearchBooks;

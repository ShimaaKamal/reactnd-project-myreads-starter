import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BooksList from "./BooksList";

class SearchBooks extends Component {
  state = {
    books: []
  };
  findBook = valueChanged => {
    if (valueChanged) {
      BooksAPI.search(valueChanged).then(books => {
        if (books) {
          books.forEach(element => {
            console.log(element.shelf);
          });
        }

        this.setState(() => ({
          books: books
        }));
      });
    }
  };

  updateBookShelf = (shelf, bookToUpdate) => {
    this.setState(state => {
      state.books.find(book => book.id === bookToUpdate.id).shelf = shelf;
      return {
        books: state.books
      };
    });
    BooksAPI.update(bookToUpdate, shelf);
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
            <BooksList
              books={this.state.books}
              updateBookShelf={this.updateBookShelf}
            ></BooksList>
          )}
        </div>
      </div>
    );
  }
}
export default SearchBooks;

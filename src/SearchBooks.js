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
      BooksAPI.search(valueChanged).then(result => {
        if (!result.error) {
          this.setState(() => ({
            books: result
          }));
        } else {
          this.clearBooksList();
        }
      });
    } else {
      this.clearBooksList();
    }
  };

  clearBooksList = () => {
    this.setState(() => ({
      books: []
    }));
  };

  updateBooksShelfWithUserbooksShelf = (books, userBooks) => {
    books.forEach(book => {
      const foundedBook = userBooks.find(userBook => userBook.id === book.id);
      if (foundedBook) {
        book.shelf = foundedBook.shelf;
      }
    });
  };

  updateBookShelf = (shelf, bookToUpdate) => {
    this.setState(state => {
      state.books.find(book => book.id === bookToUpdate.id).shelf = shelf;
      return {
        books: state.books
      };
    });
    this.props.onUpdate(shelf, bookToUpdate);
  };

  render() {
    const { userBooks } = this.props;
    const { books } = this.state;

    this.updateBooksShelfWithUserbooksShelf(books, userBooks);

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
          {this.state.books && (
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

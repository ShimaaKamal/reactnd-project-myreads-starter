import React, { Component } from "react";
import BooksList from "./BooksList";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

class HomePage extends Component {
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
    this.setState(state => {
      state.books.find(book => book.id === bookToUpdate.id).shelf = shelf;
      return {
        books: state.books
      };
    });
    BooksAPI.update(bookToUpdate, shelf);
  };

  render() {
    const { books } = this.state;
    const currentlyReadingBooks = books.filter(
      book => book.shelf === "currentlyReading"
    );
    const readBooks = books.filter(book => book.shelf === "read");
    const wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <BooksList
                books={currentlyReadingBooks}
                updateBookShelf={this.updateBookShelf}
              ></BooksList>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <BooksList
                books={wantToReadBooks}
                updateBookShelf={this.updateBookShelf}
              ></BooksList>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <BooksList
                books={readBooks}
                updateBookShelf={this.updateBookShelf}
              ></BooksList>
            </div>
          </div>
        </div>
        <div>
          <Link className="open-search" to="search"></Link>
        </div>
      </div>
    );
  }
}

export default HomePage;

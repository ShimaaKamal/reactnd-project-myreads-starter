import React, { Component } from "react";
import BooksList from "./BooksList";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    const { userBooks, onUpdate } = this.props;

    const currentlyReadingBooks = userBooks.filter(
      book => book.shelf === "currentlyReading"
    );
    const readBooks = userBooks.filter(book => book.shelf === "read");
    const wantToReadBooks = userBooks.filter(
      book => book.shelf === "wantToRead"
    );
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
                updateBookShelf={onUpdate}
              ></BooksList>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <BooksList
                books={wantToReadBooks}
                updateBookShelf={onUpdate}
              ></BooksList>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <BooksList
                books={readBooks}
                updateBookShelf={onUpdate}
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

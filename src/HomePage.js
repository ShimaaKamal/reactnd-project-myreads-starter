import React, { Component } from "react";
import BooksList from "./BooksList";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    const { books } = this.props;
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
              <BooksList books={currentlyReadingBooks}></BooksList>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <BooksList books={wantToReadBooks}></BooksList>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <BooksList books={readBooks}></BooksList>
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

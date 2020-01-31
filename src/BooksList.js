import React, { Component } from "react";

class BooksList extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="book" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default BooksList;

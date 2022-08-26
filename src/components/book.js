import React from "react";
import { PropTypes } from "prop-types";
const Book = ({book , handleUpdateShelf}) => {
  // handle book shelf change
  const handleUpdateBookShelf = (e) => {
    const value = e.target.value;
    handleUpdateShelf(book, value);
  };
    return (
    <li key={book.id}>
    <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 192,
          backgroundImage:
          `url(${book.imageLinks.thumbnail})`,
        }}
      ></div>
      <div className="book-shelf-changer">
        <select onChange={handleUpdateBookShelf} value={book.shelf ? book.shelf : "none"}>
          <option value="none" disabled>
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
    {book.authors.map((author) => (
         <div className="book-authors">{author}</div>
        ))}
  </div></li> 
  );
}
Book.propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired,
  };
export default Book;

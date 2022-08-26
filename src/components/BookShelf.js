import Book from './Book';
import React from "react";
const  BookShelf= ({ ShelfName, books , ShelfId , handleUpdateShelf}) => {
    const bookshelfs = books.filter((book) => (book.shelf === ShelfId ));
    return ( <div key={ShelfId} className="bookshelf">
    <h2 className="bookshelf-title">{ShelfName}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      {bookshelfs.map((book) => (
         <Book key={book.id} book={book} handleUpdateShelf={handleUpdateShelf} />
        ))}
      </ol>
    </div>
  </div>);
}
 
export default BookShelf ;

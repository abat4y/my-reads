import { Link } from "react-router-dom";
import BookShelf  from "./BookShelf";
import React from "react"; 
const Main = ({books , handleUpdateShelf}) => {
    return ( <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf  key={'currentlyReading'} ShelfName={'Currently Reading'} books={books} ShelfId={"currentlyReading"} handleUpdateShelf={handleUpdateShelf}/>
        <BookShelf  key={'wantToRead'} ShelfName={'Want to Read'} books={books} ShelfId={"wantToRead"} handleUpdateShelf={handleUpdateShelf}/>
        <BookShelf  key={'Read'} ShelfName={'Read'} books={books} ShelfId={"read"} handleUpdateShelf={handleUpdateShelf}/>
      </div>
    </div>
    <div className="open-search">
      <Link to="/Search">Add a book</Link>
    </div>
  </div> );
}
 
export default Main ;
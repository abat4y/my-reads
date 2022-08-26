
import Book from './Book';
import React from "react";
const ShelfSearch = ({searchBookQuery ,handleUpdateShelf ,SearchFlag}) => {
    return ( 
        <ol className="books-grid">{
            SearchFlag ? (
                searchBookQuery.map((book) => (
                    <Book key={book.id}  book={book}  handleUpdateShelf={handleUpdateShelf}/>
                   ))
              ) : (
                <h1>No Data</h1>
              )
           }</ol>
    )
}
 
export default ShelfSearch ;
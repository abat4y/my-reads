
import Book from './book';
import React from "react";
const ShelfSearch = ({searchBookQuery ,handleUpdateShelf ,SearchFlag}) => {
    let SearchFlagCheck = SearchFlag;
    return ( 
        <ol className="books-grid">{
            SearchFlagCheck ? (
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
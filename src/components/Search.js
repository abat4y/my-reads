import { Link } from "react-router-dom";
import ShelfSearch from './ShelfSearch';
const search = ({searchquery , handelsearch ,searchBookQuery ,handleUpdateShelf ,SearchFlag}) => {
    return (<div className="search-books">
          <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input onChange={handelsearch} value={searchquery}
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
              <ShelfSearch searchBookQuery={searchBookQuery} handleUpdateShelf={handleUpdateShelf} SearchFlag={SearchFlag}/>
          </div>
        </div>);
}
 
export default search;
import "../css/App.css";
import { useState , useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDebounce } from "use-debounce";
import Main from "../components/Main";
import Search  from "../components/Search";
import PageNotFound  from "../components/PageNotFound";
import * as BooksAPI from  "../BooksAPI";
function App() {
  const [searchquery , setsearchquery] = useState("");
  const [searchBookQuery, setSearchBookQuery] = useState([]);
  const [valueSearch] = useDebounce(searchquery, 500);
  const [SearchFlag , setSearchFlag] = useState(true);
  const [books , setbooks] = useState([]);
  
  // GET all Books
  const getbooks = async()=>{
    const response = await BooksAPI.getAll();
    setbooks(response);
  }
  // handle Update Shelf
  const handleUpdateShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    getbooks();
  };
  // handel search 
  const handelsearch= (event)=>{
    setsearchquery(event.target.value);
  };
  // Search Result here
  // keep track for search input val
  useEffect(() => {
    let isActive = true;
    if (valueSearch) {
      BooksAPI.search(valueSearch).then((data) => {
        if (data.error) {
          setSearchBookQuery([]);
          setSearchFlag(false);
        } else {
          if (isActive) {
            //console.log(data);
            const NewSearchData =  data.map((searchbook) => {
              books.forEach((book)=>{
                if (searchbook.id === book.id ){
                  searchbook.shelf = book.shelf ;
                }
              });
              return searchbook;
            });
            setSearchFlag(true);
            setSearchBookQuery(NewSearchData);
          }
        }
      });
    }
    return () => {
      isActive = false;
      setSearchBookQuery([]);
    };
  }, [valueSearch , books]);
  useEffect(()=>{
    getbooks();
  },[]);
  return (
    <div className="app">
    <Routes>
       <Route path="/" element={
        <Main books={books} handleUpdateShelf={handleUpdateShelf} />
      }
      />
    <Route path="/search" element={<Search searchquery={searchquery} searchBookQuery={searchBookQuery}
     handelsearch={handelsearch} handleUpdateShelf={handleUpdateShelf} SearchFlag={SearchFlag} />} />
    <Route path="*" element={<PageNotFound/>} />
  </Routes>
  </div>
  );
}
export default App;

import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App () {
  const [books, setBooks] = useState([]);

  const creatBook = (title) => {
    console.log('Need to add a book with:', title);
  };

  return(
  <div>
    < BookCreate onCreate={creatBook}/>
  </div>
  );
}

export default App;
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App () {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !==id;
    });

    setBooks(updatedBooks)
  };

  const creatBook = (title) => {
    const updatedBooks = [
      ...books, 
      { id:Math.round(Math.random()*9999), 
        title, 
      },
      ];
    setBooks(updatedBooks);
  };

  return(
  <div className="app">
    <BookList books={books} onDelete={deleteBookById} />
    <BookCreate onCreate={creatBook} />
  </div>
  );
}

export default App;
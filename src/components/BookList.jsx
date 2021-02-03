import React, { useState, useEffect } from "react";
import fire from "../fire";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  // Firebase
  const db = fire.firestore();

  let booksRef;

  booksRef = db.collection("books");

  const getBooks = () => {
    booksRef.onSnapshot((querySnapshot) => {
      setBooks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          book: doc.data(),
        }))
      );
    });
  };

  return (
    <>
      <div>
        {books.map((doc) => {
          return (
            <li key={doc.id} id='tbr'>
              {doc.book.title}
              <span>{doc.book.title}</span>
              <span>{doc.book.author}</span>
              <span>{doc.book.desc}</span>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default BookList;

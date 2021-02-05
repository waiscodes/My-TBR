import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import fire from "../fire";

const BookList = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  // Firebase
  const db = fire.firestore();

  let booksRef;
  booksRef = db.collection("books");

  const getBooks = () => {
    booksRef
      .where("username", "==", "bb")
      .get()
      .then((snapshot) => {
        setBooks(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            book: doc.data(),
          }))
        );
      });
  };

  return (
    <>
      <Card>
        {books.map((doc) => {
          return (
            <Card key={doc.id} id='tbr'>
              <h3>{doc.book.title}</h3>
              <span>{doc.book.author}</span>
              <p>{doc.book.desc}</p>
            </Card>
          );
        })}
      </Card>
    </>
  );
};

export default BookList;

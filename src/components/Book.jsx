import React, { useState, useEffect } from "react";
import fire from "../fire";

const Book = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [desc, setDesc] = useState();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  // Firebase
  const db = fire.firestore();

  let booksRef;
  let unsubscribe;

  booksRef = db.collection("books");

  const addToFirestore = () => {
    booksRef.add({
      title: title,
      author: author,
      desc: desc,
    });
  };

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

  // Event Handlers

  const handleFieldChange = (e) => {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "desc":
        setDesc(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToFirestore();
  };

  return (
    <>
      <div className='container'>
        {desc}
        <h2>Birm's Profile</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            onChange={handleFieldChange}
          />
          <br />
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            name='author'
            id='author'
            onChange={handleFieldChange}
          />
          <br />
          <label htmlFor='desc'>Description</label>
          <textarea
            name='desc'
            id='desc'
            cols='30'
            rows='10'
            onChange={handleFieldChange}
          ></textarea>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
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

export default Book;

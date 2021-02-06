import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { db } from "../fire";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const titleRef = useRef();
  const authorRef = useRef();
  const descriptionRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  // Get books list
  useEffect(() => {
    getBooks();
  }, []);

  //
  const getBooks = () => {
    db.collection("books")
      .where("username", "==", username)
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

  // Add Book
  const addToFirestore = () => {
    db.collection("books").add({
      title: titleRef.current.value,
      author: authorRef.current.value,
      description: descriptionRef.current.value,
      username: username,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addToFirestore();
  };

  return (
    <>
      <h1>{username}</h1>
      <Card>
        <Card.Body>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' ref={titleRef} required />
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Author</Form.Label>
              <Form.Control type='text' ref={authorRef} required />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Review</Form.Label>
              <Form.Control as='textarea' rows={3} ref={descriptionRef} />
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>
              Recommend
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        {books.map((doc) => {
          return (
            <Card key={doc.id} id='tbr'>
              <h3>{doc.book.title}</h3>
              <span>{doc.book.author}</span>
              <p>{doc.book.description}</p>
            </Card>
          );
        })}
      </Card>
    </>
  );
};

export default Profile;

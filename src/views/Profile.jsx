import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { db } from "../fire";
import { useParams, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { username } = useParams();
  const titleRef = useRef();
  const authorRef = useRef();
  const descriptionRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [bookRec, setBookRec] = useState(false);
  const [userExists] = useState();
  const history = useHistory();

  useEffect(() => {
    findUser();
    getBooks();
  }, []);

  const findUser = () => {
    db.collection("users")
      .where("username", "==", username)
      .get()
      .then((snap) => {
        if (snap.docs[0] && snap.docs[0].exists) {
          console.log("gottem");
        } else {
          history.push("/login");
        }
      })
      .catch((err) => alert(err));
  };

  const toggleBook = () => {
    setBookRec(!bookRec);
  };

  // Get books List
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
      <h1>{userExists && userExists.username}</h1>
      <p>{userExists && userExists.bio}</p>
      <div className='w-100 text-center mt-2'>
        <button onClick={toggleBook}>Recommend Book</button>
      </div>
      <Card className={bookRec ? "" : "d-none"}>
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

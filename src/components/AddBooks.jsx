import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { db } from "../fire";

const AddBooks = () => {
  const [username, setUsername] = useState();
  const titleRef = useRef();
  const authorRef = useRef();
  const descriptionRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, userInfo } = useAuth();
  // const { findUsername } = useAuth();

  const addToFirestore = () => {
    db.collection("books").add({
      title: titleRef.current.value,
      author: authorRef.current.value,
      description: descriptionRef.current.value,
      username: "bb",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addToFirestore();
  };

  // const getUsername = async (uid) => {
  //   const temp = await db
  //     .collection("users")
  //     .doc(uid)
  //     .get()
  //     .then((snap) => {
  //       return snap.data();
  //     });

  //   setUsername(temp);
  // };

  // useEffect(() => {
  //   getUsername(currentUser.uid);
  // }, []);

  return (
    <>
      <Card>
        <Card.Body>
          {username}
          {userInfo && JSON.stringify(userInfo, null, 2)}
          {currentUser && currentUser.email}
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
    </>
  );
};

export default AddBooks;

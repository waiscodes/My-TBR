import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import fire from "../fire";

const YourProfile = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    getUser();
  }, []);

  // Firebase
  const db = fire.firestore();

  let booksRef;
  booksRef = db.collection("users");

  const getUser = () => {
    booksRef
      .doc(currentUser.uid)
      .get()
      .then((snapshot) => {
        setUser(snapshot.data());
      });
  };

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center'>{user.fullName}</h2>
          <p className='text-center'>@{user.username}</p>
          <p className='text-center'>{user.bio}</p>
          {error && <Alert variant='danger'>{error}</Alert>}
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default YourProfile;

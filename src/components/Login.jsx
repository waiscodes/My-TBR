import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import fire, { auth, twitterProvider } from "../fire";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, loginWithTwitter } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Login");
    }
    setLoading(false);
  };

  const twitter = () => {
    fire
      .auth()
      .signInWithPopup(twitterProvider)
      .then((result) => {
        setResult(result);
      })
      .catch((error) => {
        console.log("yikes");
      });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <img src={result?.user.photoURL} alt='' />
          <p>{result?.user.displayName}</p>
          <p>{result?.additionalUserInfo.username}</p>

          <pre>{JSON.stringify(result.additionalUserInfo, null, 2)}</pre>
          <h2 className='text-center mb-4'>Login</h2>
          {/* {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                autoComplete='username'
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                autoComplete='new-password'
                ref={passwordRef}
                required
              />
            </Form.Group>
          </Form> */}
          <Button className='w-100' onClick={twitter}>
            Sign in with Twitter
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;

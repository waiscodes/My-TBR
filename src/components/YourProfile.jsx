import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const YourProfile = () => {
  const [error, setError] = useState("");
  const { currentUser, logout, userInfo } = useAuth();
  const history = useHistory();

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
      <div className='w-100 text-center mt-2'>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Button variant='link' onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <Card className='mb-3'>
        <Card.Body>
          <h2 className='text-center'>{userInfo && userInfo.fullName}</h2>
          <p className='text-center'>@{userInfo && userInfo.username}</p>
          <p className='text-center'>{userInfo && userInfo.bio}</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default YourProfile;

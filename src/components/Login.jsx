import React, { useState } from "react";
import fire from "../fire";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  console.log(Email, Password);

  const auth = fire.auth();

  const changeHandler = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <p>Login</p>
      <form onSubmit={submitHandler}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={changeHandler}
          autoComplete='username'
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={changeHandler}
          autoComplete='current-password'
        />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default Login;

import React from "react";
import fire from "../fire";

const Login = () => {
  const auth = fire.auth();
  console.log(auth);

  return (
    <>
      <p>Login</p>
      <form action='#'>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='current-password' name='password' id='password' />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default Login;

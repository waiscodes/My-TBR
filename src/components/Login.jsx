import React from "react";

const Login = () => {
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

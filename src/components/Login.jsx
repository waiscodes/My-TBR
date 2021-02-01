import React from "react";
import fire from "../fire";

const Login = () => {
  const auth = fire.auth();
  console.log(auth);

  const changeHandler = () => {};
  const submitHandler = () => {};

  return (
    <>
      <p>Login</p>
      <form onSubmit={submitHandler}>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' id='email' onChange={changeHandler} />
        <label htmlFor='password'>Password</label>
        <input
          type='current-password'
          name='password'
          id='password'
          onChange={changeHandler}
        />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default Login;

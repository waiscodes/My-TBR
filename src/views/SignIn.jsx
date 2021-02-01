import React from "react";
import fire from "../fire";
import Login from "../components/Login";

const SignIn = () => {
  const auth = fire.auth();
  console.log(auth);

  return (
    <>
      <Login />
    </>
  );
};

export default SignIn;

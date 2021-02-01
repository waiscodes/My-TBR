import React from "react";
import fire from "../fire";

const SignIn = () => {
  const auth = fire.auth();
  console.log(auth);

  return (
    <>
      <p>Sign In</p>
    </>
  );
};

export default SignIn;

import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const SignIn = () => {
  const [account, setAccount] = useState(true);

  const toggle = () => {
    setAccount(!account);
  };
  return (
    <>
      {account ? <Login /> : <Register />}
      <div className='w-100 text-center mt-2' onClick={toggle}>
        {account
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </div>
    </>
  );
};

export default SignIn;

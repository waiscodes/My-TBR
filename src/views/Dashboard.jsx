import React, { useState } from "react";
import Profile from "../components/Profile";
import UpdateProfile from "../components/UpdateProfile";

const Dashboard = () => {
  return (
    <>
      <Profile />
      <UpdateProfile />
      <div className='w-100 text-center mt-2'></div>
    </>
  );
};

export default Dashboard;

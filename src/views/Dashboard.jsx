import React, { useState } from "react";
import Profile from "../components/Profile";
import BookList from "../components/BookList";

const Dashboard = () => {
  return (
    <>
      <Profile />
      <BookList />
      <div className='w-100 text-center mt-2'></div>
    </>
  );
};

export default Dashboard;

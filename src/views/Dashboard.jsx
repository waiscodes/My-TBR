import React, { useState } from "react";
import Profile from "../components/Profile";
import BookList from "../components/BookList";
import AddBooks from "../components/AddBooks";

const Dashboard = () => {
  return (
    <>
      <Profile />
      <AddBooks />
      <BookList />
      <div className='w-100 text-center mt-2'></div>
    </>
  );
};

export default Dashboard;

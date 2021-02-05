import React, { useState } from "react";
import YourProfile from "../components/YourProfile";
import BookList from "../components/BookList";
import AddBooks from "../components/AddBooks";

const Dashboard = () => {
  return (
    <>
      <YourProfile />
      <AddBooks />
      <BookList />
      <div className='w-100 text-center mt-2'></div>
    </>
  );
};

export default Dashboard;

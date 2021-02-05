import React, { useState } from "react";
import YourProfile from "../components/YourProfile";
import BookList from "../components/BookList";
import AddBooks from "../components/AddBooks";

const Dashboard = () => {
  const [addBook, setAddBook] = useState(false);

  const toggleBook = () => {
    setAddBook(!addBook);
  };

  return (
    <>
      <YourProfile />
      <div className='w-100 text-center mt-2'>
        <button onClick={toggleBook}>Recommend Book</button>
      </div>
      {addBook ? <AddBooks /> : ""}
      <BookList />
    </>
  );
};

export default Dashboard;

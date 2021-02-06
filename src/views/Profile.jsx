import React, { userParam } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();

  return (
    <>
      <h1>{username}</h1>
    </>
  );
};

export default Profile;

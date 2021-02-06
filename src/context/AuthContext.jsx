import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../fire.js";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);

  const register = (name, email, username, password) => {
    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      return db.collection("users").doc(cred.user.uid).set({
        name: name,
        username: username,
        bio: "",
      });
    });
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  // Reset password here

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };
  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

  // // Find Username
  // const findUsername = (uid) => {
  //   db.collection("users")
  //     .doc(uid)
  //     .get()
  //     .then((snapshot) => {
  //       return snapshot.data();
  //     });
  // };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((snap) => {
          setUserInfo(snap.data());
        });
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userInfo,
    register,
    login,
    logout,
    updateEmail,
    updatePassword,
    // findUsername,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

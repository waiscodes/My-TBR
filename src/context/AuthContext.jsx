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

  const loginWithTwitter = () => {
    // console.log("Twitter Sign in Functionality");
    // auth
    //   .signInWithPopup(twitterOAuth)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch(() => {
    //     console.log("yikes something went wrong");
    //   });
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      db.collection("users")
        .get()
        .then((snap) => {
          // setUserInfo(snap.data());
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
    loginWithTwitter,
    logout,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

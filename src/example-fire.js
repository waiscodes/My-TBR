import firebase from "firebase";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

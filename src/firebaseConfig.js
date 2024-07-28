import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* eslint-disable no-unused-vars */
const firebaseConfig = {
  apiKey: "AIzaSyCaNEEeougwtnFnfTabwS-44ZQJ74Fw2pQ",
  authDomain: "login-project-792aa.firebaseapp.com",
  projectId: "login-project-792aa",
  storageBucket: "login-project-792aa.appspot.com",
  messagingSenderId: "385232733792",
  appId: "1:385232733792:web:ea2d6fc55710a3559fa505",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

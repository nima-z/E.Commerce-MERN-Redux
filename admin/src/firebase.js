import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnbWNmkYWFBboXh6xK4BgVABrXboVo4sQ",
  authDomain: "shop-mern-redux-reactquery.firebaseapp.com",
  projectId: "shop-mern-redux-reactquery",
  storageBucket: "shop-mern-redux-reactquery.appspot.com",
  messagingSenderId: "417343878893",
  appId: "1:417343878893:web:f7a09859cb1428213fbee4",
};

const app = initializeApp(firebaseConfig);

export default app;

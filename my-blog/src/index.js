import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5pHeM9p11bIEazAeIXN5RrgRt2VuPWxM",
  authDomain: "my-react-blog-676db.firebaseapp.com",
  projectId: "my-react-blog-676db",
  storageBucket: "my-react-blog-676db.appspot.com",
  messagingSenderId: "710433388424",
  appId: "1:710433388424:web:65b909eef6e17d043dec3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

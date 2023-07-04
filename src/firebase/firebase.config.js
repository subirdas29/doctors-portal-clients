
<<<<<<< HEAD

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
=======
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
>>>>>>> 2abe198f66b5fb957757574e4f1f21993a829e2b
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey, 
  authDomain:process.env.REACT_APP_authDomain, 
  projectId:process.env.REACT_APP_projectId, 
  storageBucket:process.env.REACT_APP_storageBucket, 
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
<<<<<<< HEAD
  appId:process.env.REACT_APP_appId


  // apiKey: "AIzaSyCIqn7LhJDNA16LXJF9EcSTWTOtTaEQzw0",
  // authDomain: "doctor-portal-b7b23.firebaseapp.com",
  // projectId: "doctor-portal-b7b23",
  // storageBucket: "doctor-portal-b7b23.appspot.com",
  // messagingSenderId: "578636744678",
  // appId: "1:578636744678:web:95e35be1052468e6433827"
};

=======
  appId:process.env.REACT_APP_appId, 
};

// Initialize Firebase
>>>>>>> 2abe198f66b5fb957757574e4f1f21993a829e2b
const app = initializeApp(firebaseConfig);
export default app;
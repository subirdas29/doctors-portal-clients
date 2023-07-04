

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey, 
  authDomain:process.env.REACT_APP_authDomain, 
  projectId:process.env.REACT_APP_projectId, 
  storageBucket:process.env.REACT_APP_storageBucket, 
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId


  // apiKey: "AIzaSyCIqn7LhJDNA16LXJF9EcSTWTOtTaEQzw0",
  // authDomain: "doctor-portal-b7b23.firebaseapp.com",
  // projectId: "doctor-portal-b7b23",
  // storageBucket: "doctor-portal-b7b23.appspot.com",
  // messagingSenderId: "578636744678",
  // appId: "1:578636744678:web:95e35be1052468e6433827"
};

const app = initializeApp(firebaseConfig);
export default app;
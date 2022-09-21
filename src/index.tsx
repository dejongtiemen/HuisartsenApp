import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
  apiKey: "AIzaSyA_m8FRjlphP3XDyZNGIv-lyGkH8y0ZFNc",
  authDomain: "huisartsenapp-71948.firebaseapp.com",
  projectId: "huisartsenapp-71948",
  storageBucket: "huisartsenapp-71948.appspot.com",
  messagingSenderId: "532408443705",
  appId: "1:532408443705:web:33fcedc5296e1415893ee8",
  measurementId: "G-3M8KJQLD8D"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyD9dw1Jrw8mjYO_qfApT-pdGm947rvbG54",
  authDomain: "payment-tracker-f8345.firebaseapp.com",
  projectId: "payment-tracker-f8345",
  storageBucket: "payment-tracker-f8345.appspot.com",
  messagingSenderId: "334646208809",
  appId: "1:334646208809:web:51dab6ae95677b4f1eaf38",
  measurementId: "G-MG8SMHX7BD"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;

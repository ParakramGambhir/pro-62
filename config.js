import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyByK_fbwy9tATtCPZ_MI7qBV6rTLItrtLk",
    authDomain: "attendence-app-2b7e8.firebaseapp.com",
    databaseURL: "https://attendence-app-2b7e8-default-rtdb.firebaseio.com",
    projectId: "attendence-app-2b7e8",
    storageBucket: "attendence-app-2b7e8.appspot.com",
    messagingSenderId: "625566137874",
    appId: "1:625566137874:web:a94c4a60827f100f1422cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();
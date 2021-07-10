import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyA1MJTuGpyYrR4morSHhN06WN_Dd_Qk_yw",
  authDomain: "linkedin-yt-85935.firebaseapp.com",
  projectId: "linkedin-yt-85935",
  storageBucket: "linkedin-yt-85935.appspot.com",
  messagingSenderId: "570339434791",
  appId: "1:570339434791:web:8239c89234a86aca864902"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
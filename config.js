const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyBo2shsQ_PByyG-DninA7caQF4tRQRG-TE",
    authDomain: "announcementboard-1b39a.firebaseapp.com",
    projectId: "announcementboard-1b39a",
    storageBucket: "announcementboard-1b39a.appspot.com",
    messagingSenderId: "411007631041",
    appId: "1:411007631041:web:0c22784dc18035b2f55e40",
    measurementId: "G-RPGZ401GP5"
  };

firebase.initializaApp(firebaseConfig)

const db = firebase.firestore()

const Users = db.collection("Users")

export default Users


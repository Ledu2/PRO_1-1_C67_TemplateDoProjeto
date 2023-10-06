import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC5ZKLzzEMdL2ai4xCD7-ZshvA7KOUDQeM",
    authDomain: "projeto-c67-955b5.firebaseapp.com",
    databaseURL: "https://projeto-c67-955b5-default-rtdb.firebaseio.com",
    projectId: "projeto-c67-955b5",
    storageBucket: "projeto-c67-955b5.appspot.com",
    messagingSenderId: "775541620687",
    appId: "1:775541620687:web:7f8ca43905f3c1bb3d5cba"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
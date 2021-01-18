import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyD9-cl2pbTCbiFp7toYL46TmuMqBUjE5Qc",
    authDomain: "to-do-list-on-react.firebaseapp.com",
    projectId: "to-do-list-on-react",
    databaseURL: "https://to-do-list-on-react-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "to-do-list-on-react.appspot.com",
    messagingSenderId: "748650878258",
    appId: "1:748650878258:web:e54a010816d1728990732b"
};

firebase.initializeApp(config);

export default firebase;


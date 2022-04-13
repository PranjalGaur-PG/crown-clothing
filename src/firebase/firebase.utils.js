import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCcJGd7gk7rnTANdQrWYF2czyF09cXmm4Y",
    authDomain: "crown-clothing-db-7d0d3.firebaseapp.com",
    projectId: "crown-clothing-db-7d0d3",
    storageBucket: "crown-clothing-db-7d0d3.appspot.com",
    messagingSenderId: "822634666959",
    appId: "1:822634666959:web:34403f6f9e5d19adca90ba",
    measurementId: "G-CC6W70LCZC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDX2wlZtnSBJcsUl13G5tIFPnTjVkOTGlY",
    authDomain: "account-f76eb.firebaseapp.com",
    databaseURL: "https://account-f76eb.firebaseio.com",
    projectId: "account-f76eb",
    storageBucket: "account-f76eb.appspot.com",
    messagingSenderId: "756092532517",
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
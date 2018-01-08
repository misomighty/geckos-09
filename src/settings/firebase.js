import * as admin from "firebase-admin";
import * as service from "../settings/firebase-admin.json";

export default admin.initializeApp({
    credential: admin.credential.cert(service),
    databaseURL: "https://trellolite.firebaseio.com"
});

const provider = new firebase.auth.GoogleAuthProvider();

// Calls a popup allowing the user to sign into Google
firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
    } else {
        // No user is signed in.
    }
});
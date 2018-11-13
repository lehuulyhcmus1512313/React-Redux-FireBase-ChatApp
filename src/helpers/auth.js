import {firebaseAuth, googleProvider} from "../config/constants";

export function loginWithGoogle() {
    return firebaseAuth().signInWithRedirect(googleProvider);
    //return authenticate(loginWithFirebase(googleProvider));
}


function authenticate(promise) {
    return promise
        .then(function (result) {
            // login with your app with result object to get accessToken (token)
            // localStorage.save(token);
            var token = result.credential.accessToken;
            var user = result.user;
            console.log("login happened with firebase, ", JSON.stringify(user));
            localStorage.setItem("firebaseUser", JSON.stringify(result));
            return Promise.resolve(result);
        }).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            alert("failed firebase login" + error);
            return Promise.reject("err");
        });
}

function loginWithFirebase(provider) {
    return firebaseAuth().signInWithRedirect(provider);
    
     firebaseAuth().signInWithPopup(provider).then(function (result) {
  
     const token = result.credential.accessToken;
     
     const user = result.user;
    
     console.log("google login success. token=", token, ",user=", JSON.stringify(user));
     }).catch(function (error) {
    
     const errorCode = error.code;
     const errorMessage = error.message;
    
     const email = error.email;
    
     const credential = error.credential;
    
     console.log("google login failed.reason=", errorMessage);
     });
    
}

export function logout() {
    return firebaseAuth().signOut();
}


import app from "firebase/app";
import "firebase/auth";
import 'firebase/database';
import axios from "axios";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};

axios.defaults.baseURL ='http://15.164.251.155:8000/'

class Firebase {
  constructor() {
    app.initializeApp(config);


    this.auth = app.auth();
    this.db = app.database();

    this.emailProvider = new app.auth.EmailAuthProvider();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    
  }

  checkApi = () => console.log("Firebase working");

  // *** User API

  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');

  // *** Database API ***
  getDB = () => this.db;

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** Auth API ***
  getCurrentUser = () => this.auth.currentUser;
  
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSendEmailVerification = () => console.log("send varification email")
  //   this.auth.currentUser.sendEmailVerification({
  //     // url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
  // });

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = ({key}) => {
    if (key === "logout") {
      this.auth.signOut();
    }
  };

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doDeleteUserEmail = providedPassword => {
    const user = this.auth.currentUser;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    const credential = app.auth.EmailAuthProvider.credential(
      user.email, 
      providedPassword
    )
    user.reauthenticateWithCredential(credential)
    .then(() => {
      user.delete()
    })
  }

  doDeleteUserOAuth = () => {
    const user = this.auth.currentUser;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    // var credential =this.googleProvider.credential(
    //   googleUser.getAuthResponse().id_token);
    
    // user.reauthenticateWithCredential(credential)
    // .then(() => console.log("reauth"))
    // .catch((error) => {
    //     console.log(error);
    // });
  }

  doPasswordReset = () => this.auth.sendPasswordResetEmail();

  doPasswordUpdate = (prev, password) => {
    const user = this.auth.currentUser;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    const credential = app.auth.EmailAuthProvider.credential(
      user.email, 
      prev
    )
    user.reauthenticateWithCredential(credential)
    .then(() => {
      this.auth.currentUser.updatePassword(password);
    })
  }


  doDeleteAccount = () => console.log('delete')//this.auth.currentUser.delete();

}

export default Firebase;

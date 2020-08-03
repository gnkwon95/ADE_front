import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    
    /* 소셜로그인 */
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

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

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;

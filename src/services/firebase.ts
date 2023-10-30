import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";
import firebaseConfig from "./config";

class Firebase {
  db;
  auth;
  constructor() {
    app.initializeApp(firebaseConfig);

    this.db = app.firestore();
    this.auth = app.auth();
  }

  // AUTH ACTIONS ------------

  createAccount = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  addUser = (id: string, user: object) =>
    this.db.collection("users").doc(id).set(user);
}

const firebaseInstance = new Firebase();

export default firebaseInstance;

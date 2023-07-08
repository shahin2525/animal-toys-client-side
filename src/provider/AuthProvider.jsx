import { createContext, useEffect, useState } from "react";
import {
  // GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  // const githubProvider = new GithubAuthProvider();

  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const userProfileUpdate = () => {
    setLoading(true);
    return updateProfile(auth);
  };

  //

  //   import { getAuth, updateProfile } from "firebase/auth";
  // const auth = getAuth();
  // updateProfile(auth.currentUser, {
  //   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
  // }).then(() => {
  //   // Profile updated!
  //   // ...
  // }).catch((error) => {
  //   // An error occurred
  //   // ...
  // });
  //

  // const githubLogin = () => {
  //   setLoading(true);
  //   return signInWithPopup(auth, githubProvider);
  // };
  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      return unsubsCribe();
    };
  }, []); // add new this
  const authInfo = {
    createUser,
    login,
    logOut,
    googleLogin,
    userProfileUpdate,
    // githubLogin,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

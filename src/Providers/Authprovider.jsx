import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,              // ✅ added
  GoogleAuthProvider,           // ✅ added
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const Authcontext = createContext(null);

// ✅ Google provider instance
const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const axiospublic=UseAxiosPublic()
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateuserprofile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // ✅ Google Sign-in Function
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      if(currentuser){
// get tokon store client side
const userInfo={email:currentuser.email}
axiospublic.post('/jwt',userInfo)
.then((res)=>{

  if(res.data.token){
    localStorage.setItem('access-token',res.data.token)
    console.log(res.data.token)
  }
})
      }
      else{
        // TODo:remove tokon(if token stored in the client side:'local storage,caching,in memory')
      localStorage.removeItem("access-token")
      }

      setLoading(false);
    });
    return () => unsubscribe();
  }, [axiospublic]);

  const authinfo = {
    user,
    loading,
    createuser,
    signinuser,
    logout,
    updateuserprofile,
    signInWithGoogle, // ✅ added to context
  };

  return (
    <Authcontext.Provider value={authinfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;

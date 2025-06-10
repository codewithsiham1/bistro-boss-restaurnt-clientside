import React from 'react';
import { FcGoogle } from "react-icons/fc";
import Useauth from '../../Hooks/Useauth';
import { useNavigate } from 'react-router-dom';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';


const Sociallogin = () => {
    const {signInWithGoogle}=Useauth();
    const axiosPublic=UseAxiosPublic();
    const navigate=useNavigate();
    const handlegooglesignIn = () => {
        signInWithGoogle()
          .then((result) => {
            const userInfo = {
              email: result.user?.email,
              name: result.user?.displayName,
            };
      
            
            axiosPublic.post("/user", userInfo).then((res) => {
              console.log(res.data);
              navigate('/');
            });
          })
          .catch((error) => {
            console.error("Google Sign-In Error:", error);
          });
      };
      
    return (
        <div className="px-8 pb-6">
                <button
                  onClick={handlegooglesignIn}
                  className="btn w-full bg-white text-black hover:bg-gray-100 border border-gray-300"
                >
                  <FcGoogle className="text-2xl mr-2" />
              <FcGoogle className="text-2xl mr-2" />  Continue with Google
                </button>
              </div>
    );
};

export default Sociallogin;
import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Authcontext } from '../../Providers/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import authimg from "../../assets/others/authentication.png";
import auth1 from "../../assets/others/authentication1.png";
import Sociallogin from '../../Shared/Social/Sociallogin';

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signinuser } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signinuser(email, password)
      .then(() => {

        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
          background: '#e0f7fa'
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
          confirmButtonColor: "#3085d6"
        });
      });
  };

  const validateCaptchaHandler = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      Swal.fire({
        icon: 'success',
        title: 'Captcha Verified',
        showConfirmButton: false,
        timer: 1200
      });
    } else {
      setDisabled(true);
      Swal.fire({
        icon: 'error',
        title: 'Captcha did not match!',
        text: 'Please try again.',
        confirmButtonColor: "#d33"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>

      <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-6" style={{ backgroundImage: `url(${authimg})` }}>
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl flex flex-col lg:flex-row w-full max-w-6xl overflow-hidden">
          
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 bg-gradient-to-r from-purple-300 to-blue-200">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Login to Your Account</h1>
            <img src={auth1} alt="Login Illustration" className="max-w-xs w-full" />
          </div>

          {/* Right Side - Login Form */}
          <div className="lg:w-1/2 p-8">
            <form onSubmit={handlelogin} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Captcha */}
              <div>
                <label className="block mb-2 text-gray-700 font-medium">Captcha</label>
                <LoadCanvasTemplate />
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    placeholder="Type the text above"
                    className="flex-1 px-4 py-2 border rounded-lg"
                    required
                  />
                  <button
                    type="button"
                    onClick={validateCaptchaHandler}
                    className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                  >
                    Validate
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={disabled}
                  className={`w-full py-2 rounded-lg text-white font-semibold transition-all duration-300 ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  Login
                </button>
              </div>
            </form>
              <Sociallogin></Sociallogin>
            {/* Sign Up Redirect */}
            <p className="mt-4 text-center text-sm text-gray-600">
              New here?{" "}
              <Link to="/signup" className="text-blue-600 underline hover:text-blue-800">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

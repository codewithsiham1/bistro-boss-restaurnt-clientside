import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Authcontext } from "../../Providers/Authprovider";
import authimg from "../../assets/others/authentication.png";
import auth2 from "../../assets/others/authentication2.png";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import Sociallogin from "../../Shared/Social/Sociallogin";

const Signup = () => {
  const { createuser, updateuserprofile } = useContext(Authcontext);
const axiospublic=UseAxiosPublic();
const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createuser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;

        updateuserprofile(data.name, data.photoURL)
          .then(() => {
            // create user entry in the database
            const userInfo={
              name:data.name,
              email:data.email
            }
            axiospublic.post("/user",userInfo)
            .then(res=>{
              if(res.data.insertedId){
                Swal.fire({
                  icon: "success",
                  title: "Signup Successful",
                  text: "Welcome to Bistro Boss!",
                })
                .then(()=>{
                  navigate('/')
                })
              }
            })
         
            reset();
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Profile Update Failed",
              text: error.message,
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: error.message,
        });
      });
  };


  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-12"
        style={{ backgroundImage: `url(${authimg})` }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-6xl w-full">
          {/* Left: Image & Title */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Sign Up Now!</h1>
            <img src={auth2} alt="Signup Illustration" className="mx-auto lg:mx-0 max-w-xs" />
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2">
            <div className="card w-full bg-white shadow-md">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>

                {/* Photo URL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: "Photo URL is required" })}
                    placeholder="https://your-photo.com"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <p className="text-red-500 text-sm">{errors.photoURL.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>

                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "At least 6 characters",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                        message:
                          "Include uppercase, lowercase, number, and special character",
                      },
                    })}
                    placeholder="Your Password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                  )}
                </div>

                {/* Register Button */}
                <div className="form-control mt-4">
                  <button type="submit" className="btn btn-primary w-full">
                    Register Now!
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="divider px-8">OR</div>

              {/* Google Sign-in Button */}
           <Sociallogin></Sociallogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

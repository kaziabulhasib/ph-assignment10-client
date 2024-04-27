import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
// toast

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const notify = () => toast("User created Successfully");
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [showPassword, SetShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.PhotoUrl.value;
    console.log(email, password, name, image);
    e.target.reset();

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
    // password validation
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setRegisterError("Password must contain at least one lowercase letter");
      return;
    }
    if (password.length < 6) {
      setRegisterError("Password Should be 6 Character or More");
      return;
    }
    // reset error
    setRegisterError("");
    createUser(email, password)
      .then((result) => {
        // update user profil
        updateUserProfile(name, image);

        console.log(result.user);
        setSuccess(true);

        notify();
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col '>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Register now!</h1>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleRegister} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                name='name'
                type='text'
                placeholder='Name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                name='email'
                type='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>PhotoUrl</span>
              </label>
              <input
                name='PhotoUrl'
                type='text'
                placeholder='PhotoUrl'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <div className='relative'>
                <input
                  name='password'
                  type={showPassword ? "text" : "password"}
                  placeholder='password'
                  className='input input-bordered w-full'
                  required
                />

                <span
                  className='absolute top-4 right-3'
                  onClick={() => SetShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <label className='label'>
                <p href='#' className='label-text-alt text-[12px] mt-6  '>
                  Already User ?{" "}
                  <Link
                    to='/login'
                    className='link-hover text-base ml-8 font-robo font-medium '>
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn bg-[#f2f2f2]'>Register</button>
            </div>
          </form>
          {registerError && <p className=' bg-red-500'>{registerError}</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;

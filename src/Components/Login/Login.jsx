import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
// toast

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const notify = () => toast("Logged in Successfully");
  const [loginError, setLoginError] = useState("");
  const { signinUser, signinWithGoogle, signinWithGithub } =
    useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // Sign in user
    signinUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        // navigate("/");
        notify();
        setLoginError("");
      })
      .catch((error) => {
        console.error(error);
        setLoginError("Email or Password didn't match");
        e.target.reset();
      });
  };

  //  google Log in
  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then((result) => {
        console.log(result);
        notify();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // git hub login
  const handleGithubLogin = () => {
    signinWithGithub()
      .then((result) => {
        console.log(result);
        notify();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col '>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleLogin} className='card-body'>
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
                defaultValue=''
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                name='password'
                type='password'
                placeholder='password'
                className='input input-bordered'
                required
                defaultValue=''
              />
              <label className='label'>
                <p href='#' className='label-text-alt text-[12px] mt-6  '>
                  New User ?{" "}
                  <Link
                    to='/register'
                    className='link-hover text-base ml-8 font-robo font-medium '>
                    Register
                  </Link>
                </p>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn bg-[#f2f2f2]'>Login</button>
            </div>
          </form>
          {loginError && <p className=' bg-red-500'>{loginError}</p>}
          {/* social Login  */}
          <div className='p-4 flex gap-4'>
            <button onClick={handleGoogleLogin} className='btn btn-sm'>
              Google Login
            </button>
            <button onClick={handleGithubLogin} className='btn btn-sm'>
              Github Login
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

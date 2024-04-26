import { NavLink } from "react-router-dom";
import "./Nav.css";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
const Nav = () => {
  // const { user, logOut } = useContext(AuthContext);

  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {
  //       console.log("User Logged out");
  //     })
  //     .catch((error) => console.error(error));
  // };

  const links = (
    <>
      <div className='gap-6'>
        <NavLink activeClassName='active' className='nav-link' to='/'>
          Home
        </NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/add'>
          Add Item
        </NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/mycraft'>
          My Art&Craft
        </NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/login'>
          Login
        </NavLink>
        {/* {user && (
          <NavLink activeClassName='active' className='nav-link' to='/profile'>
            Your Profile
          </NavLink>
        )} */}
      </div>
    </>
  );
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            {links}
          </ul>
        </div>
        <a className='btn btn-ghost text-2xl font-robo text-[#3b4d5d] font-bold'>
          Brushify
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 space-x-6'>{links}</ul>
      </div>
      <div className='navbar-end'>
        {/* {user ? (
          <>
            {" "}
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/y0yrnYQ/1681283571946.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                <li>
                  <button className='btn btn-sm  btn-ghost'>
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
              </ul>
            </div>
            <Link onClick={handleLogOut} to='/register' className='btn'>
              Sign Out
            </Link>
          </>
        ) : (
          <Link to='/login' className='btn'>
            Login
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Nav;

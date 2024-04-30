import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Nav = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  console.log(theme);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User Logged out");
      })
      .catch((error) => console.error(error));
  };

  const links = (
    <>
      <div className='gap-6 '>
        <NavLink activeClassName='active' className='nav-link' to='/'>
          Home
        </NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/add'>
          Add Item
        </NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/allcraft'>
          All Art & Craft
        </NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/mycraft'>
          My Art&Craft
        </NavLink>
        {/* this is dark theme  */}
        {/* <NavLink></NavLink> */}
      </div>
    </>
  );
  return (
    <div className='navbar bg-base-100 mt-6'>
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
        {/* toggle start */}
        <label className='cursor-pointer grid place-items-center mr-8'>
          <input
            onChange={handleToggle}
            type='checkbox'
            value='synthwave'
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
        {/* toggleend */}
        {user ? (
          <>
            {" "}
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <img
                    src={
                      user?.photoURL ||
                      "https://startup.telangana.gov.in/wp-content/uploads/2021/07/male-placeholder-1000x960.jpg"
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
                  {/* log out on hover  */}
                  <Link onClick={handleLogOut} to='/register' className='btn'>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
            {/* <Link onClick={handleLogOut} to='/register' className='btn'>
              Sign Out
            </Link> */}
          </>
        ) : (
          <>
            <Link to='/login' className='btn mr-6'>
              Login
            </Link>
            <Link to='/register' className='btn'>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;

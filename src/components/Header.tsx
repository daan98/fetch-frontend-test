import React from 'react';
import { Link } from 'react-router-dom';

import { doLogout } from '../api';

const Header = () => {

  const handleOnLogOut = async () => {
    const apiUrl : string = import.meta.env.VITE_API_BASE_URL;

    await doLogout(apiUrl);
    localStorage.removeItem('status');
    window.location.pathname = "/";
  };

  return (
    <>
      <nav className="bg-white w-4/5 rounded-lg my-0 mx-auto">
        <ul className="flex gap-5 flex-col justify-center md:flex-row">
          <li className="flex p-2">
            <button type="button" className="bg-secondary px-6 py-2 rounded-full font-bold duration-300 ease-in-out transition-all hover:bg-secondaryHover hover:text-white hover:duration-300 hover:ease-in-out hover:transition-all">Show Match</button>
          </li>
          <li className="flex p-2">
            <Link
              to="/"
              onClick={() => handleOnLogOut()}
              className="bg-secondary px-6 py-2 rounded-full font-bold duration-300 ease-in-out transition-all hover:bg-secondaryHover hover:text-white hover:duration-300 hover:ease-in-out hover:transition-all"
            >
                LogOut
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-slate-800 h-16 px-16 items-center flex">
      <h1 className="text-3xl font-bold text-green-500"> 👨🏼‍💻 EM Service </h1>
      <div className="space-x-4 ml-auto">
        <Link className="hover:text-blue-400" to="/"> Home</Link>
        <Link className="hover:text-blue-400" to="/profile"> Profile</Link>
        <Link className="hover:text-blue-400" to="/logout"> Logout </Link> {/* Add Logout link */}
      </div>
    </div>
  );
};

export default Navbar;

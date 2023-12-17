import React, { useState, useEffect, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import "animate.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [click, setClick] = useState(false);
  const navRef = useRef(null);

  const handleToggle = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Success", path: "/success" },
  ];
  return (
    <div id="nav" className="lg:max-w-[1380px] m-auto flex justify-between items-center absolute p-3">
      <div className="flex items-center">
        <img src="/ph_logo.svg" alt="" />
        <h1 className="text-white text-xl font-bold hidden sm:block">Programming Hero</h1>
      </div>

      <div id="navs" className="flex gap-4 hidden md:flex">
        {navigationItems.map((nav, index) => (
          <div key={index} className="text-white">
            <Link to={nav.path}>{nav.name}</Link>
          </div>
        ))}
      </div>

      <div onClick={handleToggle} className="sm:hidden">
        {click ? (
          <FaTimes className="text-white text-2xl" onClick={closeMenu} />
        ) : (
          <CiMenuBurger className="text-white text-2xl " />
        )}
      </div>

      {click && (
        <div className="flex flex-col items-center bg-gray-800 absolute top-16 right-0 w-full animate__animated animate__backInRight" ref={navRef}>
          {navigationItems.map((nav, index) => (
            <Link key={index} to={nav.path} onClick={closeMenu} className="text-white py-2">
              {nav.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;

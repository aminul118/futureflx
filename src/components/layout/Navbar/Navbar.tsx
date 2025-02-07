import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const NavLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
    </>
  );
  return (
    <div className="bg-white fixed w-full">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          <Link href="/">
            <Image
              src="/logos/logo-black.png"
              width={100}
              height={50}
              alt="Future flex logo"
              style={{ width: "auto" }}
            />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

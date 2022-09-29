import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";

import { BsChevronUp } from "react-icons/bs";
// import { ChevronUpIcon } from "@heroicons/react/solid";
const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling

  const [color, setColor] = useState(false);
  //   const changeColor = () => {
  //     if (window.scrollY >= 90) {
  //       setColor(true);
  //     } else {
  //       setColor(false);
  //     }
  //   };

  //   window.addEventListener("scroll", changeColor);

  return (
    <div
      //   className={
      //     color
      //       ? "header bg-black  z-50 spacingYtext rajez spacingYlogo"
      //       : "header  bg-transparent  bg-opacity-80 rajez"
      //   }
      className="header  bg-black/40  bg-opacity-80 rajez "
    >
      <nav className="navbar ">
        <Link to="/" className="logo">
          {/* <img
            src="/assets/images/mainlogo.png"
            alt="logo"
            className="cursor-pointer"
          /> */}
          <h2 className="text-white capitalize text-3xl tracking-wider font-vibes">
            Saffronirving
          </h2>
        </Link>

        <ul
          className={click ? "nav-menu font-text active" : "nav-menu font-text"}
        >
          <li className="lg:flex hidden nav-item text-lg capitalize tracking-widest font-semibold nav-desk  text-gray-200  group relative cursor-pointer">
            <Link to="/" onClick={closeMenu}>
              The Journey
            </Link>
          </li>

          <li className="hidden lg:flex nav-desk  group relative tracking-widest nav-item text-lg font-semibold capitalize    group dropdown  px-4 text-gray-200  cursor-pointer ">
            <Link to="/about" onClick={closeMenu}>
              Menu
            </Link>
          </li>

          {/* <li className="nav-item text-sm uppercase  nav-desk group  text-white font-semibold hover:text-primary">
            <Link to="#" className="hidden lg:block" onClick={closeMenu}>
              PRODUCTS
            </Link>

            <div className="hidden mt-3 group-hover:flex group-hover:flex-col group absolute bg-black text-white duration-500 transition-all max-w-max rounded-xl w-[250px]">
              <Link to="/solar-tubular-battery" className="w-full">
                <div className=" textclass font-semibold px-5 py-2  hover:text-white hover:bg-primary max-w-max  m-2 rounded-xl duration-500 ">
                  Solar Tubular Batteries
                </div>
              </Link>
              <Link to="/tublar-batteries" className="w-full">
                <div className=" textclass font-semibold px-5 py-2  hover:text-white hover:bg-primary  max-w-max  m-2 rounded-xl  duration-500">
                  Tubular Batteries
                </div>
              </Link>
              <Link to="/inverter-batteries" className="w-full">
                <div className=" textclass font-semibold px-5 py-2  hover:text-white hover:bg-primary  max-w-max  m-2 rounded-xl  duration-500">
                  Inverter Batteries
                </div>
              </Link>
              <Link to="/e-rickshaw-battery" className="w-full">
                <div className=" textclass font-semibold px-5 py-2  hover:text-white hover:bg-primary max-w-max  m-2 rounded-xl  duration-500">
                  E-Rickshaw Batteries
                </div>
              </Link>
              <Link to="/automotive-battery" className="w-full">
                <div className=" textclass font-semibold px-5 py-2  hover:text-white hover:bg-primary max-w-max  m-2 rounded-xl  duration-500">
                  Automotive Batteries
                </div>
              </Link>
            </div>
          </li> */}

          {/* mobile view */}

          {/* <div className=" lg:hidden flex  nav-font ">
            <div className="mx-auto w-full rounded-2xl  ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex w-full justify-between   rounded-lg   text-center  font-medium text-white   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <li className=" px-4 text-base uppercase  py-1 text-white font-semibold hover:text-primary">
                        <Link to="/" onClick={closeMenu}>
                          Home
                        </Link>
                      </li>
                    </Disclosure.Button>

                    <Disclosure.Button className=" flex w-full justify-between   rounded-lg   py-2 text-center  font-medium text-white   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <li className="nav-item text-sm uppercase    text-white font-semibold hover:text-primary">
                        <Link to="/about" onClick={closeMenu}>
                          About Us
                        </Link>
                      </li>
                    </Disclosure.Button>

                    <Disclosure.Button className=" flex w-full justify-between  rounded-lg px-4  py-2 text-center  font-medium text-white   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className="uppercase font-semibold">Products</span>

                      <BsChevronUp
                        className={`${
                          open ? "rotate-180 transform text-white" : ""
                        } h-5 w-5 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="  pb-2 px-5 text-gray-500">
                      <Link to="/solar-tubular-battery" className="w-full">
                        <div className="  font-semibold py-3 hover:text-secondary text-white max-w-max hover:bg-primary m-2 rounded">
                          Solar Tubular Batteries
                        </div>
                      </Link>
                      <Link to="/tublar-batteries" className="w-full">
                        <div className="  font-semibold py-3 hover:text-secondary text-white max-w-max hover:bg-primary m-2 rounded">
                          Tubular Batteries
                        </div>
                      </Link>
                      <Link to="/inverter-batteries" className="w-full">
                        <div className="  font-semibold py-3 hover:text-secondary text-white max-w-max hover:bg-primary m-2 rounded">
                          Inverter Batteries
                        </div>
                      </Link>
                      <Link to="/e-rickshaw-battery" className="w-full">
                        <div className="  font-semibold py-3 hover:text-secondary text-white max-w-max hover:bg-primary m-2 rounded">
                          E-Rickshaw Batteries
                        </div>
                      </Link>

                      <Link to="/automotive-battery" className="w-full">
                        <div className="  font-semibold py-3 hover:text-secondary text-white max-w-max hover:bg-primary m-2 rounded">
                          Automotive Batteries
                        </div>
                      </Link>
                    </Disclosure.Panel>

                    <Disclosure.Button className=" flex w-full justify-between   rounded-lg   py-2 text-center  font-medium text-white   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <li className="nav-item text-sm uppercase  nav-desk   text-white font-semibold hover:text-primary">
                        <Link to="/blog" onClick={closeMenu}>
                          BLOGS
                        </Link>
                      </li>
                    </Disclosure.Button>

                    <Disclosure.Button className=" flex w-full justify-between   rounded-lg   py-2 text-center  font-medium text-white   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <li className=" text-sm uppercase px-4   text-white font-semibold hover:text-primary ">
                        <a href="/assets/images/ATS_Catalog_SpecSheet.compressed.pdf">
                          Catalogue
                        </a>
                      </li>
                    </Disclosure.Button>
                  </>
                )}
              </Disclosure>
            </div>
          </div> */}

          {/* <li className="nav-item text-sm uppercase  nav-desk   text-white font-semibold hover:text-primary">
            <Link to="#" onClick={closeMenu}>
            CAREERS
            </Link>
          </li> */}

          <li className="nav-item text-lg capitalize tracking-widest hidden lg:block nav-desk font-text  text-gray-200  font-semibold ">
            <Link to="/blog" onClick={closeMenu}>
              Private Event
            </Link>
          </li>
          <li className="nav-item text-lg capitalize tracking-widest hidden lg:block nav-desk   text-gray-200  font-semibold ">
            <Link to="/blog" onClick={closeMenu}>
              Details
            </Link>
          </li>

          <li className="nav-item text-lg capitalize tracking-widest lg:flex hidden nav-desk   text-gray-200  font-semibold  ">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="link-color  text-gray-200  group-hover:text-white "
            >
              Contact Us
            </Link>
          </li>

          <li className="nav-item text-lg capitalize tracking-widest lg:flex hidden nav-desk   text-gray-200  font-semibold hover:text-primary ">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="link-color  text-gray-200  group-hover:text-white "
            >
              Celebration Cakes
            </Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
      </nav>
      <hr
        className={color ? "bg-black text-black" : "bg-white  w-[93%] mx-auto"}
      />
    </div>
  );
};

export default Navbar;

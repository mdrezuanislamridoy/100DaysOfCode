import React, { useState } from "react";
import { Link } from "react-router-dom";
import DoPost from "./DoPost";

export default function Header() {
  const [isShown, setIsShown] = useState(false);
  const [hideShow, setHideShow] = useState(false);
  const onShow = () => {
    setIsShown(!isShown);
  };
  const ShowPosts = () => {
    setHideShow(true);
    setIsShown(false);
  };
  return (
    <div className="bg-black fixed w-full top-0 z-10">
      <nav className=" flex px-2 md:px-0 justify-between py-2 flex-col md:flex-row  max-w-screen-lg m-auto">
        <div className="logo w-full md:2/6 flex justify-between">
          <h2 className="text-white text-2xl">RRLogo</h2>
          <div>
            <i
              onClick={onShow}
              className="fa-solid fa-bars cursor-pointer text-white md:hidden"
            ></i>
          </div>
        </div>
        <div
          className={`navigation w-full  md:flex flex ${
            isShown ? "flex" : "hidden"
          } justify-center flex-col md:flex-row items-center md:w-4/6 z-10 absolute md:relative top-10 bg-black md:top-0 md:justify-between`}
        >
          <ul className="w-3/4 flex flex-col items-center md:flex-row  md:justify-around">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="members" className="text-white hover:text-gray-300">
                Members
              </Link>
            </li>
            <li>
              <Link to="contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
          <div className="w-1/4 flex justify-center md:justify-end">
            <button
              onClick={ShowPosts}
              className="bg-white text-black my-3 md:my-0 px-3 rounded-full"
            >
              Add Post
            </button>
          </div>
        </div>
      </nav>
      {hideShow && <DoPost setHideShow={setHideShow}></DoPost>}
    </div>
  );
}

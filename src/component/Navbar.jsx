import { useState } from "react";
import Home from "./Home";
import { NavLinks } from "..";
import { close, menu } from "../assets";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="flex w-full justify-between items-center py-4">
      <div>
        <a href={<Home/>} className=" text-3xl font-bold montserrat">
          <span className="text-[#fec107]">@</span>awahabt<span className="text-[#fec107]">.</span>
        </a>
      </div>
      <div>
        <ul className="flex gap-5 montserrat text-xl max-[1000px]:hidden ">
          {NavLinks.map((Links, index) => (
            <a href={Links.id} key={Links.id} className="nav-btn">
              <li>{Links.title}</li>
            </a>
          ))}
        </ul>
      </div>
      <div className=" flex min-[1000px]:hidden items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settoggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 absolute top-14 items-center justify-center right-0 my-2`}
        >
          <div className="small-screen-nav-btn">
            <ul className=" montserrat text-xl flex flex-col ">
              {NavLinks.map((Links, index) => (
                <a href={Links.id} key={Links.id} className="small-screen-nav-btn-li">
                  <li>{Links.title}</li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

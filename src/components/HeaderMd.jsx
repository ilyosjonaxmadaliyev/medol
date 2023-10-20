import { BiSearchAlt, BiSolidPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import SelectLng from "./SelectLng";
import { useState } from "react";
import NavbarDropDown from "./NavbarDropDown";

function HeaderMd() {
  const [show, setShow] = useState(false);
  return (
    <div className="md:hidden">
      <div className="custom-container elements-center justify-between py-4">
        <Link to={"/"}>
          <img src={logo} alt="logo-medol" className="w-48 h-14" />
        </Link>
        <div className="elements-center justify-between gap-4 ml-5 sm:mr-0">
          <div className="elements-center hidden sm:flex">
            <Link
              to={"#"}
              className="w-12 h-12 rounded-full bg-white all-elements-center"
            >
              <MdLocationOn className="text-sky-800 w-6 h-6" />
            </Link>
          </div>
          <div className="elements-center">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white all-elements-center">
              <BiSolidPhoneCall className="text-sky-800 sm:w-6 sm:h-6 w-4 h-4 cursor-pointer" />
            </div>
          </div>
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white all-elements-center mr-3 hidden sm:flex">
            <BiSearchAlt className="text-sky-800 w-6 h-6 cursor-pointer" />
          </div>
          <SelectLng />

          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white all-elements-center mr-3 relative">
            <FaBars
              onClick={() => setShow((prev) => !prev)}
              className="text-sky-800 sm:w-6 sm:h-6 w-4 h-4 cursor-pointer"
            />
            {show && <NavbarDropDown />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMd;

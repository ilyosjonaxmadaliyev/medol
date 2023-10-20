import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import logo from "../assets/logo.svg";
import SelectLng from "./SelectLng";
import HeaderMd from "./HeaderMd";
import Location from "./Location";
import Phone from "./Phone";

function Header() {
  return (
    <>
      <HeaderMd />
      <div className=" hidden md:block">
        <div className="custom-container flex items-center justify-between py-4">
          <Location />
          <Phone />
          <Link to={"/"}>
            <img src={logo} alt="logo-medol" className="w-48 h-14" />
          </Link>
          <div className="w-12 h-12 rounded-full bg-white all-elements-center">
            <BiSearchAlt className="text-sky-800 w-6 h-6 cursor-pointer" />
          </div>
          <a href="#">
            <div className="bg-white elements-center h-12 rounded-3xl">
              <FaFacebookF className="text-sky-800 w-6 h-6 m-3" />
              <h5 className="text-base text-blue-950 font-semibold mr-3">
                Мы на Facebook
              </h5>
            </div>
          </a>
          <SelectLng />
        </div>
      </div>
    </>
  );
}

export default Header;

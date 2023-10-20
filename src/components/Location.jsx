import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

function Location() {
  return (
    <div className="elements-center mb-6 sm:mb-0">
      <Link
        to={"#"}
        className="w-12 h-12 rounded-full bg-white all-elements-center mr-3"
      >
        <MdLocationOn className="text-sky-800 w-6 h-6" />
      </Link>
      <h5 className="text-base leading-tight text-[#5a5a5a]">
        г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
      </h5>
    </div>
  );
}

export default Location;

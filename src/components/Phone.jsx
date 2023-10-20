import { BiSolidPhoneCall } from "react-icons/bi";

function Phone() {
  return (
    <div className="elements-center mb-6 sm:mb-0">
      <div className="w-12 h-12 rounded-full bg-white all-elements-center mr-3">
        <BiSolidPhoneCall className="text-sky-800 w-6 h-6" />
      </div>
      <div className="flex flex-col text-[#5a5a5a]">
        <a href="tel:+998 71 276-62-53" className="text-base leading-tight">
          +998 71 276-62-53
        </a>
        <a href="tel:+998 71 276-62-54" className="text-base leading-tight">
          +998 71 276-62-54
        </a>
      </div>
    </div>
  );
}

export default Phone;

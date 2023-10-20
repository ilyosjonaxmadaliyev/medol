import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function SelectLng() {
  const [select, setSelect] = useState(false);
  // const [country, setCountry] = useState("");

  return (
    <div className="bg-white elements-center justify-between h-9 sm:h-12 rounded-3xl p-3 sm:pr-0 md:p-3 cursor-pointer">
      <div className="elements-center">
        <img
          className="w-6 h-6 rounded-full mr-1"
          src="https://w.forfun.com/fetch/a7/a7576e885be80bafc5d8af7cdd3f9268.jpeg"
          alt=""
        />
        <h4 className="text-black mr-3 md:mr-0 hidden md:block">Русский</h4>
        <span
          onClick={() => setSelect((prev) => !prev)}
          className="text-lg text-black mr-2 sm:mr-0"
        >
          <MdKeyboardArrowDown size={22} />
        </span>
      </div>

      {select && (
        <ul className="absolute right-16 top-16 bg-white p-3 rounded-xl text-black">
          <li className="elements-center mb-2">
            <img
              className="w-6 h-6 rounded-full mr-3"
              src="https://w.forfun.com/fetch/a7/a7576e885be80bafc5d8af7cdd3f9268.jpeg"
              alt=""
            />
            <h4>Русский</h4>
          </li>
          <li onClick={() => setCountry()} className="elements-center mb-2">
            <img
              className="w-6 h-6 rounded-full mr-3"
              src="https://a-z-animals.com/media/2023/02/iStock-1217765834.jpg"
              alt=""
            />
            <h4>Английский</h4>
          </li>
          <li onClick={() => setCountry()} className="elements-center">
            <img
              className="w-6 h-6 rounded-full mr-3"
              src="https://tergov.uz/uploads/news/72cef04923577cc395792d82b5acbe0b.jpg"
              alt=""
            />
            <h4>Узбекский</h4>
          </li>
        </ul>
      )}
    </div>
  );
}

export default SelectLng;

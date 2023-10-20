import brand1 from "../assets/brand-1.png";
import brand2 from "../assets/brand-2.png";
import brand3 from "../assets/brand-3.png";
import brand4 from "../assets/brand-4.png";
import brand5 from "../assets/brand-5.png";
import brand6 from "../assets/brand-6.png";
import brand7 from "../assets/brand-7.png";
import brand8 from "../assets/brand-8.png";
import PartnersMd from "./PartnersMd";
import PartnersSm from "./PartnersSm";

const partnersImage = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
];

const images = {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
};
function Partners() {
  return (
    <div className="custom-container relative pb-28">
      <h1 className="text-center text-3xl sm:text-4xl mb-14 font-semibold text-[#0D4C93]">
        ПАРТНЕРЫ
      </h1>
      <div className="sm:grid-cols-2 md:grid-cols-4 gap-10 px-10 hidden md:grid">
        {partnersImage.map((image, idx) => {
          return (
            <div
              key={idx}
              className="border-[2px] border-blue-100 rounded-3xl all-elements-center"
            >
              <img src={image} alt="..." />
            </div>
          );
        })}
        <button className="absolute right-1 top-56 w-10 h-10 rounded-full bg-blue-600 all-elements-center">
          <span className="text-white text-5xl mb-[14px] ml-1">›</span>
        </button>
        <button className="absolute left-1 top-56 w-10 h-10 rounded-full bg-blue-600 all-elements-center">
          <span className="text-white text-5xl mb-[14px] mr-1">‹</span>
        </button>
      </div>
      <div className="md:hidden sm:grid hidden">
        <PartnersMd images={images} />
      </div>
      <div className="sm:hidden ">
        <PartnersSm images={images} />
      </div>
    </div>
  );
}

export default Partners;

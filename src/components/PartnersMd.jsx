function PartnersMd({ images }) {
  return (
    <>
      <div className=" pb-28 w-full carousel">
        <div
          id="prev-brand"
          className="carousel-item w-full grid sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          <div className="border-[2px] border-blue-100 rounded-3xl all-elements-center">
            <img src={images.brand1} alt="..." />
          </div>
          <div className="border-[2px] border-blue-100 rounded-3xl all-elements-center">
            <img src={images.brand2} alt="..." />
          </div>
          <div className="border-[2px] border-blue-100 rounded-3xl all-elements-center">
            <img src={images.brand3} alt="..." />
          </div>
          <div className="border-[2px] border-blue-100 rounded-3xl all-elements-center">
            <img src={images.brand4} alt="..." />
          </div>
        </div>
        <div
          id="next-brand"
          className="carousel-item w-full grid sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          <div className="border-[2px] border-blue-100 rounded-3xl all-elements-center">
            <img src={images.brand5} alt="..." />
          </div>
          <div className="border-[2px] border-blue-100 rounded-3xl all-elements-center">
            <img src={images.brand6} alt="..." />
          </div>
          <div className="border-[2px] border-blue-100 rounded-3xl all-elements-center">
            <img src={images.brand7} alt="..." />
          </div>
          <div className="border-[2px] border-blue-100 rounded-3xl all-elements-center">
            <img src={images.brand8} alt="..." />
          </div>
        </div>
      </div>
      <a
        href="#next-brand"
        className="absolute right-1 top-[215px] w-10 h-10 rounded-full bg-blue-600 all-elements-center"
      >
        <span className="text-white text-5xl mb-[14px] ml-1">›</span>
      </a>
      <a
        href="#prev-brand"
        className="absolute left-1 top-[215px] w-10 h-10 rounded-full bg-blue-600 all-elements-center"
      >
        <span className="text-white text-5xl mb-[14px] mr-1">‹</span>
      </a>
    </>
  );
}

export default PartnersMd;

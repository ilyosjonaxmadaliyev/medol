function PartnersSm({images}) {
  return (
    <>
      <div className="carousel w-full">
        <div id="item_1" className="carousel-item w-full border-[2px] border-blue-100 rounded-3xl all-elements-center">
          <img src={images.brand1} alt="..." />
        </div>
        <div id="item_2" className="carousel-item w-full border-[2px] border-blue-100 rounded-3xl all-elements-center">
          <img src={images.brand2} alt="..." />
        </div>
        <div id="item_3" className="carousel-item w-full border-[2px] border-blue-100 rounded-3xl all-elements-center">
          <img src={images.brand3} alt="..." />
        </div>
        <div id="item_3" className="carousel-item w-full border-[2px] border-blue-100 rounded-3xl all-elements-center">
          <img src={images.brand4} alt="..." />
        </div>
        <div id="item_1" className="carousel-item w-full border-[2px] border-blue-100 rounded-3xl all-elements-center">
          <img src={images.brand5} alt="..." />
        </div>
        <div id="item_2" className="carousel-item w-full border-[2px] border-blue-100 rounded-3xl all-elements-center">
          <img src={images.brand6} alt="..." />
        </div>
        <div id="item_3" className="carousel-item w-full border-[2px] border-blue-100 rounded-3xl all-elements-center">
          <img src={images.brand7} alt="..." />
        </div>
        <div id="item_3" className="carousel-item w-full border-[2px] border-blue-100 rounded-3xl all-elements-center">
          <img src={images.brand8} alt="..." />
        </div>
      </div>
      <div className="flex justify-center w-full pt-10 gap-2">
        <a href="#item_1" className="w-5 h-5 rounded-full bg-blue-400"></a>
        <a href="#item_2" className="w-5 h-5 rounded-full bg-blue-400"></a>
        <a href="#item_3" className="w-5 h-5 rounded-full bg-blue-400"></a>
      </div>
    </>
  );
}

export default PartnersSm;

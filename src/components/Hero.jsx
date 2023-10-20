import HeroDetail from "./HeroDetail";
import heroSlide1 from "../assets/slide-1.png";
import heroSlide2 from "../assets/slide-2.png";
import heroSlide3 from "../assets/slide-3.png";
import heroSlide4 from "../assets/slide-4.png";

function Hero() {
  return (
    <>
      <div className="bg-black/10 custom-bg-image">
        <div className="py-14 custom-container">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <HeroDetail
                title={"Анализатор ABL800 FLEX"}
                desc={
                  " Ориентированный на среднюю или высокую производительность тестов,анализатор ABL800 FLEX измеряет полный набор параметров, включая pH,газы крови, электролиты, метаболиты и показатели оксиметрии"
                }
                img={heroSlide1}
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <HeroDetail
                title={"Аппарат ИК-лазерный МАКДЭЛ-09.1"}
                desc={
                  "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии"
                }
                img={heroSlide2}
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <HeroDetail
                title={"Глюкометр для измерения глюкозы"}
                desc={
                  "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии"
                }
                img={heroSlide3}
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <HeroDetail
                title={"Система для аутогемотрансфузии"}
                desc={
                  "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии"
                }
                img={heroSlide4}
              />
            </div>
          </div>
          <div className="flex justify-center w-full pt-10 gap-2">
            <a href="#item1" className="w-5 h-5 rounded-full bg-blue-400"></a>
            <a href="#item2" className="w-5 h-5 rounded-full bg-blue-400"></a>
            <a href="#item3" className="w-5 h-5 rounded-full bg-blue-400"></a>
            <a href="#item4" className="w-5 h-5 rounded-full bg-blue-400"></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

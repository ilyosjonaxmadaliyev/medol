import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

function News() {
  return (
    <div className="custom-container relative pb-16">
      <h1 className="text-center text-3xl sm:text-4xl mb-8 font-semibold text-[#0D4C93]">
        НОВОСТИ
      </h1>
      <div className="pt-40 pb-16 w-full carousel">
        <div
          id="prev"
          className="carousel-item w-full grid sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          <div>
            <NewsCard />
          </div>
          <div className="hidden sm:block">
            <NewsCard />
          </div>
          <div className="hidden md:block">
            <NewsCard />
          </div>
        </div>
        <div
          id="next"
          className="carousel-item w-full grid sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          <div>
            <NewsCard />
          </div>
          <div className="hidden sm:block">
            <NewsCard />
          </div>
          <div className="hidden md:block">
            <NewsCard />
          </div>
        </div>
      </div>
      <a
        href="#next"
        className="absolute right-1 top-[420px] w-10 h-10 rounded-full bg-blue-600 all-elements-center"
      >
        <span className="text-white text-5xl mb-[14px] ml-1">›</span>
      </a>
      <a
        href="#prev"
        className="absolute left-1 top-[420px] w-10 h-10 rounded-full bg-blue-600 all-elements-center"
      >
        <span className="text-white text-5xl mb-[14px] mr-1">‹</span>
      </a>
      <div className="all-elements-center gap-40 hidden md:flex">
        <Link to={"/products"}>
          <p className="text-center font-semibold text-[#3f38d2] text-lg hover:text-[#00C9C9]">
            Посмотреть все новости
            <span className="text-xl ml-2">⇨</span>
          </p>
        </Link>
        <Link to={"/products"}>
          <p className="text-center font-semibold text-[#3f38d2] text-lg hover:text-[#00C9C9]">
            Подписаться на новости
            <span className="text-xl ml-2">⇨</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default News;

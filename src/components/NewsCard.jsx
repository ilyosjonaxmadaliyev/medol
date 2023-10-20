import Button from "./Button";
import newsImage from "../assets/news-img.png";
import { Link } from "react-router-dom";

function NewsCard() {
  return (
    <div className="elements-center flex-col rounded-[50px] bg-slate-100 relative">
      <img
        className="rounded-[50px] absolute -top-24 w-[300px] md:w-[330px] "
        src={newsImage}
        alt="..."
      />
      <div className="py-40 px-10 pb-16 elements-center flex-col text-center">
        <div className="">
          <Link to={"/"}>
            <h5 className="text-center text-[#3942a3] text-xl mb-4 hover:text-[#59b4ff]">
              Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
            </h5>
          </Link>
          <h6 className="text-center text-[#3d3790] text-xl mb-4">
            26.07.2021
          </h6>
          <p className="text-[#363535] text-sm">
            С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
            Научно-Практический Медицинский Центр Урологии) при поддержке
            компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical
            Online Services» был проведен мастер-класс в исполнении...
          </p>
        </div>
        <div className="absolute -bottom-3">
          <Button link={"/products"} text={"Подробнее"} />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

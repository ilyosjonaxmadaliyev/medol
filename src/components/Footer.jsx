import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Location from "./Location";
import Phone from "./Phone";
import Button from "./Button";
import logo from "../assets/logo.svg";
import ModalForm from "./ModalForm";
import { useState } from "react";

function Footer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="custom-bg-image pt-12 pb-8 bg-black/10">
      {showModal && (
        <ModalForm
          showModal={showModal}
          setShowModal={setShowModal}
          text={"Отправить"}
          title={"Оставьте заявку"}
        />
      )}
      <div className="custom-container sm:grid md:grid-cols-2 gap-12">
        <div>
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo-medol"
              className="w-60 h-20 mr-2 sm:hidden mb-10 sm:mb-0"
            />
          </Link>
          <div className="sm:flex sm:justify-between mb-8">
            <h5 className="text-xl sm:text-3xl text-slate-600 font-semibold mb-6 sm:mb-0">
              Контакты
            </h5>
            <div className="sm:grid sm:grid-cols-2 gap-6">
              {/* // location */}
              <Location />
              {/* phone */}
              <Phone />
              <div className="elements-center mb-10 sm:mb-0">
                <div className="w-12 h-12 rounded-full bg-white all-elements-center mr-3">
                  <MdEmail className="text-sky-800 w-6 h-6" />
                </div>
                <a className="mr-3 text-[#5a5a5a]" href="https://info@medol.uz">
                  info@medol.uz
                </a>
              </div>
              <span onClick={() => setShowModal(true)} className="sm:flex">
                <Button text={"Оставить заявку"} />
              </span>
            </div>
          </div>
          <div className="sm:elements-center sm:justify-between mb-6 sm:mb-10">
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo-medol"
                className="w-48 h-14 mr-2 hidden sm:block"
              />
            </Link>
            <p className="text-sm sm:text-base text-gray-600 sm:leading-7 leading-6 w-full sm:w-96 sm:p-3">
              Наша цель – построить прозрачный, долгосрочный бизнес, приносить
              огромную пользу населению, путем решения глобальных вопросов.
              Внедряя инновационные технологии на рынок Узбекистана.
            </p>
          </div>
        </div>
        <div className="hidden md:grid">
          <div className=" md:grid grid-cols-3 gap-3">
            <div className="">
              <h5 className="text-3xl text-slate-600 font-semibold mb-4">
                О компании
              </h5>
              <ul>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">История</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Партнеры</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Вакансии</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h5 className="text-3xl text-slate-600 font-semibold mb-4">
                Продукция
              </h5>
              <ul>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Эндоваскулярная хирургия</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Аритмология</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Кардиохирургия</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Лабораторная диагностика</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Хирургия</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Эндоурология</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Нейрохирургия</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Анестезиология и реанимация</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Диабет</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h5 className="text-3xl text-slate-600 font-semibold mb-4">
                Услуги
              </h5>
              <ul>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Сервис</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Регистрации</a>
                </li>
                <li className="text-[#5a64d4] text-base hover:text-[#59b4ff]">
                  <a href="#">Услуги логистики</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="elements-center justify-between custom-container">
        <p className="text-sm sm:text-xl text-gray-800 font-semibold">
          © 2021 ООО «Medical Online Services»
        </p>
        <p className="hidden md:block">
          <a
            href="#"
            className="text-sm sm:text-xl text-gray-800 font-semibold  hover:text-[#59b4ff]"
          >
            Сайт разработан компанией www
            <span className="text-[#59b4ff]">.uz</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

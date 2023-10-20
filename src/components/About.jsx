import Button from "./Button";
import logo from "../assets/logo.svg";

function About() {
  return (
    <div className="custom-container py-32">
      <h1 className="text-center text-3xl sm:text-4xl mb-14 font-semibold text-[#0D4C93]">
        О КОМПАНИИ
      </h1>
      <div className="grid lg:grid-cols-2 items-center">
        <div className="border-[30px] border-[#9deeee] rounded-full w-[480px] h-[480px] absolute bg-white elements-center justify-center hidden lg:flex">
          <div className="absolute border-[30px] border-[#9dbcdf] rounded-full w-[390px] h-[390px] elements-center justify-center">
            <div className="absolute border-[30px] border-[#9deeee] rounded-full w-[300px] h-[300px] elements-center justify-center">
              <img src={logo} alt="logo-medol" className="w-48 h-14" />
            </div>
          </div>
        </div>
        <div className="bg-slate-100 lg:rounded-s-full w-full h-full"></div>
        <div className="py-10 px-10 lg:pl-0 bg-slate-100 rounded-3xl lg:rounded-s-none elements-center flex-col sm:items-start">
          <p className="text-sm sm:text-base text-gray-600 sm:leading-7 leading-6 mb-12 text-center sm:text-start">
            Группа компаний MEDOL создавалась <br /> высококвалифицированными
            специалистами в сфере медицины, инженерии и экономики, за плечами
            которых значительный опыт на рынке высоких медицинских технологий,
            которая имеет свои представительства в разных уголках Земли. В 2011
            году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online
            Services". Цель компании построить прозрачный долгосрочный бизнес,
            принести пользу обществу путем развития и внедрения передовых
            технологий в систему здравоохранения Республики Узбекистан.
          </p>
          <Button link={"/about"} text={"Узнать больше"} />
        </div>
      </div>
    </div>
  );
}

export default About;

import ServicesCard from "./ServicesCard";
import sevicesImg1 from "../assets/servic-1.png";
import sevicesImg2 from "../assets/servic-2.png";
import sevicesImg3 from "../assets/servic-3.png";

function Services() {
  return (
    <>
      <h1 className="text-center text-3xl sm:text-4xl mb-12 font-semibold text-[#0D4C93]">
        УСЛУГИ
      </h1>
      <div className="bg-black/10 custom-bg-image">
        <div className="custom-container all-elements-center py-16">
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full hidden">
            <ServicesCard
              title={"СЕРВИС ОБОРУДОВАНИЯ"}
              desc={
                "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
              }
              img={sevicesImg1}
            />
            <ServicesCard
              title={"РЕГИСТРАЦИИ"}
              desc={
                "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ...."
              }
              img={sevicesImg2}
            />
            <ServicesCard
              hidden={'sm:hidden md:grid'}
              title={"УСЛУГИ ЛОГИСТИКИ"}
              desc={
                "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей....."
              }
              img={sevicesImg3}
            />
          </div>
          <div className="sm:hidden">
            <ServicesCard
              title={"СЕРВИС ОБОРУДОВАНИЯ"}
              desc={
                "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
              }
              img={sevicesImg1}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

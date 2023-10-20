import ModalForm from "./ModalForm";
import NavbarBtn from "./NavbarBtn";
import { useState } from "react";

function Navbar() {
  const [showModal2, setShowModal2] = useState(false);
  return (
    <div className="custom-container elements-center gap-[2px] pt-4 pb-1 w-full hidden md:flex">
      <NavbarBtn link={"/"} text={"МАГАЗИН"} rounded={"rounded-s-3xl"} />
      <NavbarBtn link={"/about"} text={"O КОМПАНИИ "} />
      <NavbarBtn link={"/products"} text={"ПРОДУКЦИЯ"} />
      <NavbarBtn link={"/services"} text={"УСЛУГИ"} />
      <NavbarBtn link={"/news"} text={"АКЦИИ И НОВОСТИ"} />
      <span className="flex w-full" onClick={() => setShowModal2(true)}>
        <NavbarBtn text={"ОБРАТНАЯ СВЯЗЬ"} rounded={"rounded-e-3xl"} />
      </span>
      {showModal2 && (
        <ModalForm
          showModal={showModal2}
          setShowModal={setShowModal2}
          text={"Запросить цену"}
          title={"Запросить цену"}
        />
      )}
    </div>
  );
}

export default Navbar;

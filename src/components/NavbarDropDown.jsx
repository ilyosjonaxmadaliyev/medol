import ModalForm from "./ModalForm";
import NavbarBtn from "./NavbarBtn";
import { useState } from "react";

function NavbarDropDown() {
  const [showModal2, setShowModal2] = useState(false);
  return (
    <div className="p-4 absolute top-14 right-0 bg-white w-52 rounded-xl elements-center flex-col">
      <NavbarBtn link={"/"} text={"МАГАЗИН"} />
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

export default NavbarDropDown;

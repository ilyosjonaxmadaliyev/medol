import ProductsCard from "./ProductsCard";
import productimg1 from "../assets/product-1.png";
import productimg2 from "../assets/product-2.png";
import productimg3 from "../assets/product-3.png";
import productimg4 from "../assets/product-4.png";
import productimg5 from "../assets/product-5.png";
import productimg6 from "../assets/product-6.png";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="bg-white pt-6">
      <div className="custom-container mb-12">
        <h1 className="text-center text-3xl sm:text-4xl mb-20 font-semibold text-[#0D4C93]">
          ПРОДУКЦИЯ
        </h1>
        <div className="md:grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20 hidden">
          <ProductsCard title={"Эндоваскулярная хирургия"} img={productimg1} />
          <ProductsCard title={"Лабораторная диагностика"} img={productimg2} />
          <ProductsCard title={"Кардиохирургия"} img={productimg3} />
          <ProductsCard title={"ДИАБЕТ"} img={productimg4} />
          <ProductsCard title={"ЭНДОУРОЛОГИЯ"} img={productimg5} />
          <ProductsCard title={"АРИТМОЛОГИЯ"} img={productimg6} />
        </div>
        <div className="md:hidden sm:grid hidden grid-cols-2 gap-10 ">
          <ProductsCard title={"Эндоваскулярная хирургия"} img={productimg1} />
          <ProductsCard title={"Лабораторная диагностика"} img={productimg2} />
        </div>
        <div className="sm:hidden">
          <ProductsCard title={"Эндоваскулярная хирургия"} img={productimg1} />
        </div>
        <Link to={"/products"}>
          <p className="text-center font-semibold text-[#3f38d2] text-lg hover:text-[#00C9C9]">
            Перейти в каталог нашей продукции{" "}
            <span className="text-xl ml-2">⇨</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Products;

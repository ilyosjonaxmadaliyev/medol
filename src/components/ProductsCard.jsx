import Button from "./Button";

function ProductsCard({ title, img }) {
  return (
    <div className="elements-center flex-col rounded-3xl bg-slate-100 p-10">
      <img className="mb-4 h-full hover:scale-110 transition duration-300" src={img} alt="..." />
      <h5 className="max-w-[230px] text-center text-[#363535] text-xl md:text-2xl mb-10">{title}</h5>
      <Button link={'/products'} text={"Посмотреть все"} />
    </div>
  );
}

export default ProductsCard;

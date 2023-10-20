import Button from "./Button";

function ServicesCard({ title, img, desc, hidden }) {
  return (
    <div
      className={`${hidden} elements-center flex-col rounded-[50px] bg-slate-200 relative mb-4 md:mb-0`}
    >
      <img className="h-[220px] w-full rounded-t-[50px]" src={img} alt="..." />
      <div className="p-10 pb-16 elements-center flex-col text-center">
        <h5 className="text-center text-[#363535] text-xl mb-8">{title}</h5>
        <p className="text-[#363535] text-sm">{desc}</p>
        <div className="absolute -bottom-3">
          <Button link={"/products"} text={"Подробнее"} />
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;

import { Button } from ".";

function HeroDetail({title,desc,img}) {
  return (
      <div className="elements-center gap-2">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-lg text-4xl sm:text-5xl md:text-6xl mb-10 font-semibold leading-tight text-[#0D4C93]">
            {title}
          </h1>
          <p className="text-[#363535] text-xl md:text-2xl mb-10">
           {desc}
          </p>
          <Button link={'/singleproduct'} text={"Подробнее"} />
        </div>
        <img
          src={img}
          alt="slide-image"
          className="hidden md:block w-[650px] md:h-[450px]"
        />
      </div>
  );
}

export default HeroDetail;

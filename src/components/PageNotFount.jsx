import { Link } from "react-router-dom";

function PageNotFount() {
  return (
    <div className="elements-center flex-col h-screen">
      <h1 className="text-5xl text-blue-700 my-20">Эта страница еще не готова</h1>
      <Link
        className="w-full sm:max-w-[250px] text-center text-xl text-white bg-blue-700 hover:bg-blue-900 rounded-3xl py-3 px-10"
        to={"/"}
      >
        Назад
      </Link>
    </div>
  );
}

export default PageNotFount;

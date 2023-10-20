import { Link } from "react-router-dom";

function Button({ text,link }) {
  return (
    <Link to={link} className="text-center w-full sm:max-w-[250px] sm:text-xl text-white bg-blue-700 hover:bg-blue-900 rounded-3xl p-3 px-5 sm:py-3 sm:px-10">
      {text}
    </Link>
  );
}

export default Button;

import { Link } from "react-router-dom";

function NavbarBtn({ text, rounded, link }) {
  return (
    <Link
      to={link}
      className={`bg-white flex px-4 py-2 lg:px-5 lg:py-3 xl:py-4 xl:px-6 ${rounded} text-[#0D4C93] hover:text-[#00C9C9] w-full text-xs lg:text-sm text-center`}
    >
      {text}
    </Link>
  );
}

export default NavbarBtn;

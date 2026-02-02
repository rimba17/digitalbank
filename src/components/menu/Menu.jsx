import Link from "next/link";

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <ul
      className={`absolute top-15 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 bg-neutral-gray-50 w-[90%] rounded-md overflow-hidden transition-all duration-300 
        ${isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"}
    `}
    >
      <li className="font-semibold text-neutral-gray-600 hover:text-Green-500 transition-all">
        <Link href={"#home"} onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
      </li>
      <li className="font-semibold text-neutral-gray-600 hover:text-Green-500 transition-all">
        <Link href={"#about"} onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
      </li>
      <li className="font-semibold text-neutral-gray-600 hover:text-Green-500 transition-all">
        <Link href={"#contact"} onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </li>
      <li className="font-semibold text-neutral-gray-600 hover:text-Green-500 transition-all">
        <Link href={"#blog"} onClick={() => setIsMenuOpen(false)}>
          Blog
        </Link>
      </li>
      <li className="font-semibold text-neutral-gray-600 hover:text-Green-500 transition-all">
        <Link href={"#careers"} onClick={() => setIsMenuOpen(false)}>
          Careers
        </Link>
      </li>
    </ul>
  );
};

export default Menu;

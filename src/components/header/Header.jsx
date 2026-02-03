"use client";
import Logo from "../logo/Logo";
import Hamburger from "../icons/Hamburger";
import CloseIcon from "../icons/CloseIcon";
import { useEffect, useRef, useState } from "react";
import Menu from "../menu/Menu";
import Link from "next/link";
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#home", label: "Contact" },
  { href: "#blogs", label: "Blogs" },
  { href: "#home", label: "Careers" },
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  const liRefs = useRef([]);

  useEffect(() => {
    const index = navLinks.findIndex((l) => l.label === isActive);
    const el = liRefs.current[index];

    if (el) {
      setUnderlineStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [isActive]);
  return (
    <div className="fixed z-50 bg-neutral-white w-full">
      <div className="mx-auto max-w-container px-5 lg:px-14 flex justify-between items-center h-16 md:h-20">
        <Logo />
        <ul className="hidden md:flex flex-row items-center gap-4 text-sm font-semibold h-full relative">
          <span
            className="absolute bottom-0 h-[3px] bg-Green-500 transition-all duration-300"
            style={{
              width: underlineStyle.width,
              left: underlineStyle.left,
            }}
          />
          {navLinks.map((item, index) => {
            return (
              <li
                key={item.label}
                ref={(el) => (liRefs.current[index] = el)}
                onClick={() => setIsActive(item.label)}
                className={`hover:font-bold transition-all duration-300 ${isActive === item.label ? "text-neutral-gray-600 font-bold" : "text-neutral-gray-600"}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
        <button className="hidden md:block px-6 py-2 bg-linear-to-bl from-Green-500 to-Cyan-400 text-white rounded-3xl text-sm cursor-pointer">
          Request Invite
        </button>
        {isMenuOpen ? (
          <CloseIcon
            className="cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        ) : (
          <Hamburger
            className="cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        )}
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default Header;

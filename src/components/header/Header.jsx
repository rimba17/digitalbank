"use client";
import Logo from "../logo/Logo";
import Hamburger from "../icons/Hamburger";
import CloseIcon from "../icons/CloseIcon";
import { useState } from "react";
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
  return (
    <div className="fixed z-50 bg-neutral-white w-full py-4">
      <div className="mx-auto max-w-container px-5 lg:px-14 flex justify-between items-center">
        <Logo />
        <ul className="hidden md:flex flex-row gap-4 text-sm font-semibold">
          {navLinks.map((item) => {
            return (
              <li
                key={item.label}
                onClick={() => setIsActive(item.label)}
                className={`hover:text-Green-500 transition-all duration-300 ${isActive === item.label ? "text-Green-500 font-bold" : "text-neutral-gray-600"}`}
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

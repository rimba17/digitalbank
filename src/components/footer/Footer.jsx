"use client";
import Image from "next/image";
import logoLight from "../../../public/assets/images/logo-light.svg";
import Facebook from "../icons/Facebook";
import Youtube from "../icons/Youtube";
import Twitter from "../icons/Twitter";
import Pinterest from "../icons/Pinterest";
import Instagram from "../icons/Instagram";

import Link from "next/link";
const Footer = () => {
  return (
    <div className="py-12 lg:py-14">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-5 lg:grid lg:grid-cols-2 lg:gap-0">
          <div className="flex flex-col items-center gap-8 lg:gap-12 lg:items-start ">
            <div>
              <Image
                src={logoLight}
                alt="logo"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="flex gap-4 items-center">
              <Facebook />
              <Youtube />
              <Twitter />
              <Pinterest />
              <Instagram />
            </div>
          </div>
          <ul className="flex flex-col gap-4 text-neutral-gray-50 text-center lg:text-start lg:grid lg:grid-cols-2 lg:text-sm">
            <li className="hover:text-Green-500">
              <Link href={"#home"}>About Us</Link>
            </li>
            <li className="hover:text-Green-500">
              <Link href={"#home"}>Contact</Link>
            </li>
            <li className="hover:text-Green-500">
              <Link href={"#blogs"}>Blogs</Link>
            </li>

            <li className="hover:text-Green-500">
              <Link href={"#home"}>Careers</Link>
            </li>
            <li className="hover:text-Green-500">
              <Link href={"#home"}>Support</Link>
            </li>
            <li className="hover:text-Green-500">
              <Link href={"#home"}>Privacy Police</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 items-center lg:gap-8 lg:items-end">
          <button className="px-8 py-2.5 bg-linear-to-bl from-Green-500 to-Cyan-400 text-white rounded-3xl font-semibold text-base cursor-pointer lg:text-sm lg:px-6 lg:py-2">
            Request Invite
          </button>
          <p className="text-neutral-gray-600 font-semibold">
            &copy; Digitalbank. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

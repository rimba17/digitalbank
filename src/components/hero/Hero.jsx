"use client";
import Image from "next/image";
import heroImage from "../../../public/assets/images/image-mockups.png";
import mobileBg from "../../../public/assets/images/bg-intro-mobile.svg";
import dekstopBg from "../../../public/assets/images/bg-intro-desktop.svg";
const Hero = () => {
  return (
    <div
      className="bg-neutral-gray-100/60 flex flex-col lg:flex-row-reverse lg:items-center"
      id="home"
    >
      <div className="relative overflow-x-clip">
        <Image
          src={dekstopBg}
          alt="desktop-bg"
          className="hidden lg:block h-auto w-[130%] max-w-none -translate-y-[100px]"
          loading="eager"
        />
        <Image
          alt="mobileBg"
          src={mobileBg}
          className="w-full h-auto object-cover lg:hidden"
        />
        <Image
          alt="hero-image"
          src={heroImage}
          className="w-full h-auto absolute top-0 left-1/2 -translate-x-1/2 px-6 -translate-y-[10%] lg:w-[90%] lg:px-0 lg:top-[-12%] lg:left-auto lg:right-[-14%]  lg:translate-x-0 lg:translate-y-0"
          priority
        />
      </div>
      <div className="max-w-container mx-auto px-5 text-center flex flex-col gap-6 pb-14 -mt-12 lg:gap-5 lg:text-start lg:px-14 lg:py-44 xl:pt-0 xl:mt-10">
        <h1 className="text-4xl/tight lg:leading-12">
          Next generation <br className="xl:hidden" />
          digital banking
        </h1>
        <div className="text-neutral-gray-600 text-center leading-tight text-[clamp(14px,5vw+-0.25rem,16px)] sm:text-[18px] lg:text-start">
          <p>
            Take your financial life online. Your Digitalbank.
            <br className="sm:hidden" /> account will be a one-stop-shop for
            spending.
            <br className="sm:hidden" /> saving, budgeting, investing, and much
            more.
          </p>
        </div>
        <button className="px-8 py-2.5 bg-linear-to-bl from-Green-500 to-Cyan-400 text-white mx-auto rounded-3xl font-semibold text-base cursor-pointer lg:mx-0 lg:w-fit lg:px-6">
          Request Invite
        </button>
      </div>
    </div>
  );
};

export default Hero;

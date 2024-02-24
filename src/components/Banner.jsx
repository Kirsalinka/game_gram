import React from "react";
import {
  bannerImage1,
  bannerImage2,
  bannerImage3,
  bannerImage4,
  bannerImage5,
  bannerImage6,
  flyingCard1,
  flyingCard2,
  flyingCard3,
  logo,
} from "../constants/image";
import Button from "./ui/Button";

export default function Banner() {
  return (
    <section className="relative mt-8 home_banner sm:mt-32">
      <div className="absolute w-[50%] h-full top-0 left-[25%] transform translate-y-[-50%] rounded-full aspect-square banner_bg_gradient_1 -z-20" />

      <div className="row-span-2 my-10 mobile:my-0">
        <img
          className="laptop:h-full sm:translate-x-0 -translate-x-[10%] sm:scale-100 scale-125 sm:max-w-none max-w-[266px] relative -z-10"
          src={bannerImage1}
          alt="Old guy playing with cards"
        />
      </div>
      <div className="relative lg:order-none -order-1">
        {/* Flying Cards Images */}
        <img
          src={flyingCard1}
          alt="flying poker card"
          className="absolute top-0 right-10 sm:-translate-y-[30%] translate-y-[50%]"
        />
        <img
          src={flyingCard2}
          alt="flying poker card"
          className="absolute left-[60%] bottom-0 sm:translate-y-[100%] translate-y-[30%]"
        />
        <img
          src={flyingCard3}
          alt="flying poker card"
          className="absolute left-[15%] sm:block hidden"
        />

        {/* Logo */}
        <img
          src={logo}
          alt="Game Gram Logo"
          className="w-full px-8 lg:px-4 lg:mx-0 sm:mx-auto"
        />
      </div>
      <div className="relative mx-6 ml-12 lg:mt-24 lg:mx-0 ">
        <img
          className="absolute lg:ml-0 ml-auto right-0 laptop:block md:hidden mobile:scale-125 scale-100 laptop:-translate-y-[20%] -translate-y-[100%] -z-10"
          src={bannerImage3}
          alt="Bald Guy holding gun"
        />
        {/* Card 1 */}
        <div className="card_gradient rounded-[40px] flex flex-row gap-2 sm:w-fit items-center pr-8">
          <img
            src={bannerImage4}
            alt="Trophies and stars"
            className="sm:translate-x-[-30%] translate-x-[-20%] sm:scale-125 scale-150 sm:max-w-[220px] mobile:max-w-[160px] max-w-[140px]"
          />
          <p className="sm:text-[19px] leading-relaxed text-base max-w-60 tracking-widest font-satoshi sm:-translate-x-[15%]">
            Experience thrilling adventure in wide range of games
          </p>
        </div>
        {/* Card 2 */}
        <div className="card_gradient_2 rounded-[40px] flex flex-row lg:gap-4 relative w-fit sm:pr-10 items-center sm:ml-auto lg:mt-0 mt-16 lg:max-w-[600px]">
          <img
            className="mobile:scale-125 scale-110 mobile:-translate-y-[15%] -translate-y-4 sm:max-w-[180px] max-w-[158px] sm:translate-x-0 -translate-x-[20%]"
            src={bannerImage2}
            alt="Anime girl smoking cigratte"
          />
          <p className="sm:text-[19px] leading-relaxed text-base max-w-72 tracking-widest font-satoshi lg:max-w-[250px] sm:pl-10 ms:translate-x-0 -translate-x-[10%]">
            Play with your friends our Original Gamegram PvP Games
          </p>
          <img
            src={bannerImage5}
            alt="Combined Game icons"
            className="absolute bottom-0 right-0 scale-110 translate-x-[20%] translate-y-[20%] sm:block hidden"
          />
          <img
            src={bannerImage6}
            alt="Combined Game icons"
            className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[40%] sm:hidden"
          />
        </div>
        <Button
          link="https://gamegram.com/signup"
          class_name="font-black font-satoshi tracking-widest xl:absolute left-0 xl:translate-x-[50%] xl:-translate-y-[250%] block w-fit xl:mt-0 mt-12 xl:mx-0 xl mx-auto"
          text="Sign Up"
        />
      </div>
    </section>
  );
}

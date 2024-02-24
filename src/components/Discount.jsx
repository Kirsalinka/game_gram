import { discount_image } from "../constants/image";

export default function Discount() {
  return (
    <section className="relative px-8 mt-20 sm:mt-32">
      <div className=" discount_section">
        <div className="flex items-center justify-center md:items-end md:justify-end">
          <h2 className="mb-6 text-3xl font-black text-white text-balance sm:text-5xl font-satoshi">
            Elevate your gaming
          </h2>
        </div>
        <div className="md:row-span-2">
          <img
            src={discount_image}
            alt="Discount banner image"
            className="mx-auto min-w-[200px] sm:scale-100 scale-125 sm:translate-y-0 -translate-y-[10%]"
          />
        </div>
        <div className="col-span-2 mt-8 md:col-span-1 sm:mt-0">
          <p className="mb-6 text-lg md:text-right text-left text-white font-satoshi font-light tracking-widest md:max-w-[300px] md:ml-auto">
            experience and receive up to 15% real cashback every week.
          </p>
          <p className="text-lg md:text-right text-left text-white font-satoshi font-light tracking-widest md:max-w-[300px] md:ml-auto">
            Cashback is available for withdrawal.
          </p>
        </div>
      </div>
      <div className="absolute faded_bg_1" />
    </section>
  );
}

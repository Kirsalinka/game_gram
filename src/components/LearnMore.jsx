import { g_img_1, g_img_2, g_img_3, g_img_4 } from "../constants/image";
import Button from "./ui/Button";

export default function LearnMore() {
  return (
    <section className="mt-20 sm:mt-32 mb-14 max-w-[800px] mx-auto px-8">
      <div className="relative card_gradient_3 rounded-[40px] overflow-hidden">
        <img
          src={g_img_1}
          alt="game gram"
          className="absolute right-0 bottom-4"
        />
        <img
          src={g_img_2}
          alt="game gram"
          className="absolute bottom-0 left-0"
        />
        <img
          src={g_img_3}
          alt="game gram"
          className="absolute left-[40%] top-[30%]"
        />
        <img src={g_img_4} alt="game gram" className="absolute" />
        <div className="flex flex-col items-center gap-10 px-12 py-8 sm:gap-14">
          <h2 className="text-2xl font-semibold text-center font-satoshi sm:text-5xl sm:leading-snug">
            Do you want to learn more information about the project?
          </h2>
          <p className="text-[20px] text-[#A8A8A8] text-center">
            Visit our main website by clicking the link below.
          </p>
          <Button
            link="https://gamegram.com/"
            text="Go to the main website"
            class_name="w-fit text-center sm:px-12 px-10"
          />
        </div>
      </div>
    </section>
  );
}

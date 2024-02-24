import {
  feature_img_1,
  feature_img_2,
  feature_img_3,
  feature_img_4,
  feature_img_5,
} from "../constants/image";

const FEATURES = [
  {
    image: feature_img_1,
    text: "Various payment methods",
    class_name: "sm:order-none -order-2 sm:flex-auto flex-[40%]",
  },
  {
    image: feature_img_2,
    text: "Quick",
    class_name: "sm:flex-auto flex-[25%]",
  },
  {
    image: feature_img_3,
    text: "Profitable",
    class_name: "sm:flex-auto flex-[25%]",
  },
  {
    image: feature_img_4,
    text: "Secure",
    class_name: "sm:flex-auto flex-[25%]",
  },
  {
    image: feature_img_5,
    text: "24/7 Customer Support",
    class_name: "sm:order-none -order-1 sm:flex-auto flex-[40%]",
  },
];

export default function Features() {
  return (
    <section className="flex flex-row flex-wrap items-center justify-center gap-5 px-8 sm:space-y-0 space-y-10 lg:gap-20 sm:mt-[215px] mt-[120px]">
      {FEATURES.map((item, index) => (
        <div
          key={item.text}
          className={`flex flex-col items-center justify-around mobile:max-w-[140px] ${item.class_name}`}
        >
          <img src={item.image} alt={item.text} />
          <h3 className="font-black text-center text-white font-satoshi">
            {item.text}
          </h3>
        </div>
      ))}
    </section>
  );
}

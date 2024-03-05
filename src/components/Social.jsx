import {
  facebook,
  reddit,
  telegram,
  whatsapp,
  x,
  tiktok,
  discord,
  instagram,
} from "../constants/image";

const SOCIAL_LINK = [
  {
    icon: telegram,
    alt: "telegram link",
    link: "https://t.me/gamegramTG",
    className: "block",
  },
  {
    icon: reddit,
    alt: "reddit link",
    link: "#",
    className: "sm:hidden",
  },
  {
    icon: facebook,
    alt: "facebook link",
    link: "https://www.facebook.com/gamegram",
    className: "block",
  },
  {
    icon: whatsapp,
    alt: "whatsapp link",
    link: "#",
    className: "sm:hidden",
  },
  {
    icon: x,
    alt: "X link",
    link: "#",
    className: "sm:hidden",
  },
  {
    icon: tiktok,
    alt: "Tiktok link",
    link: "https://www.tiktok.com/@gamegram.com",
    className: "sm:block hidden",
  },
  {
    icon: discord,
    alt: "Discord link",
    link: "https://discord.gg/5w48DSbR59",
    className: "sm:block hidden",
  },
  {
    icon: instagram,
    alt: "Instagram link",
    link: "https://www.instagram.com/gamegram.ig/",
    className: "sm:block hidden",
  },
];

export default function Social() {
  return (
    <section className="flex flex-col items-center mt-20 sm:mt-32 md:gap-9 gap-4 max-w-[800px] mx-auto p-8 relative">
      <div className="absolute inset-0 card_gradient_4 -z-10" />
      <div className="flex gap-4 item-center sm:gap-6">
        {SOCIAL_LINK.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={item.className}
          >
            <img src={item.icon} alt={item.alt} className="max-w-[48px]" />
          </a>
        ))}
      </div>
      <p className="leading-relaxed text-center text-white font-satoshi sm:text-balance">
        Our project is actively developing, and we are sharing the latest
        updates with our subscribers. You can join our community by visiting and
        subscribing to one of our social media channels.
      </p>
    </section>
  );
}

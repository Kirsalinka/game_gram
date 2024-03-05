import { logo, victory_desktop, victory_mobile } from "../constants/image";

export default function Vitctory() {
  return (
    <section className="mx-auto max-w-[1110px] mt-20 sm:mt-32">
      <div className="card_gradient rounded-[40px] victory_card mx-8 py-10 md:pl-14 md:pr-0 sm:px-6 overflow-hidden">
        <div className="flex items-end mb-8">
          <img src={logo} alt="Game Gram Logo" className="md:max-w-[284px] sm:px-0 px-6" />
        </div>
        <div className="row-span-2 overflow-hidden sm:overflow-visible">
          <img
            src={victory_desktop}
            className="sm:hidden scale-125 translate-x-[20%] translate-y-5"
            alt="Gamer Gram Victory Image"
          />
          <img
            src={victory_mobile}
            className="hidden ml-auto scale-[2] -translate-x-[20%] -translate-y-[10%] sm:block max-w-[200px]"
            alt="Gamer Gram Victory Image"
          />
        </div>
        <div>
          <p className="md:max-w-[600px] font-satoshi text-balance text-white leading-relaxed sm:px-0 px-6">
            Gamegram isn't your standard online games experience, but much more,
            much better. Besides tons of classic games, here you can find
            completely original Player vs Player (PvP) games, 100% not
            skill-based. Anyone, everywhere, can try their luck right away with
            marvelous bonuses, and without annoying wagering requirements. Every
            bonus will be yours to use and withdraw at any moment.
          </p>
        </div>
      </div>
    </section>
  );
}

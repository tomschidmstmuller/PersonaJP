const haikus = [
  "古池や\n蛙飛びこむ\n水の音",
  "静けさや\n岩にしみ入る\n蝉の声",
  "この道や\n行く人なしに\n秋の暮れ",
  "柿食えば\n鐘が鳴るなり\n法隆寺",
  "我が庭の\n桜の木の下\n昼の月",
  "秋風に\nそよぐ稲穂の\n黄金かな",
];

const haikuTranslations = [
  "Old pond — a frog jumps in, sound of water",
  "Stillness — seeping into the rock, cicada cries",
  "This road — no traveler goes, autumn evening",
  "I eat a persimmon — a bell tolls, Horyuji",
  "In my garden — beneath the cherry tree, daytime moon",
  "Autumn wind — swaying rice stalks, golden!",
];

const Footer = () => {
  const today = new Date();
  const jpYear = today.getFullYear() - 2018;
  const eraCode = `令和${jpYear}年`;

  const haikuIndex = today.getDate() % haikus.length;
  const haiku = haikus[haikuIndex];
  const translation = haikuTranslations[haikuIndex];

  return (
    <footer className="mt-20 relative">
      {/* Kumiko divider */}
      <div className="kumiko-divider" />

      {/* Haiku section with vertical text accent */}
      <div className="flex gap-8 md:gap-16 items-start justify-center my-12 px-4">
        {/* Vertical text (desktop only) */}
        <div className="hidden md:block vertical-text text-bamboo-ash/30 dark:text-night-text/20 select-none text-xs leading-loose">
          一期一会
        </div>

        <div className="text-center">
          <p className="font-heading text-lg leading-relaxed whitespace-pre-line text-bamboo-ash dark:text-night-text/70">
            {haiku}
          </p>
          <p className="text-xs text-bamboo-ash/60 dark:text-night-text/40 mt-3 italic">
            &mdash; {translation}
          </p>
        </div>

        {/* Vertical text (desktop only) */}
        <div className="hidden md:block vertical-text text-bamboo-ash/30 dark:text-night-text/20 select-none text-xs leading-loose">
          余情
        </div>
      </div>

      <div className="border-t border-washi-shadow dark:border-night-border" />

      <div className="py-8 text-center text-xs tracking-widest text-bamboo-ash/60 dark:text-night-text/40">
        <p>&copy; {eraCode} Yang Tuấn Anh</p>
        <p className="mt-1">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

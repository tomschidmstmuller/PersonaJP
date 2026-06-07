import Link from "next/link";

interface JapaneseCardProps {
  kanji: string;
  romaji: string;
  english: string;
  href: string;
  description: string;
}

const JapaneseCard = ({
  kanji,
  romaji,
  english,
  href,
  description,
}: JapaneseCardProps) => {
  return (
    <Link href={href} className="group block">
      <div className="kokoro-card hover:border-vermilion dark:hover:border-night-ember hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
        <div className="text-center">
          <span
            className="block text-6xl md:text-7xl font-heading text-vermilion dark:text-night-ember mb-3 transition-transform duration-300 group-hover:scale-110"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            {kanji}
          </span>
          <span className="block text-sm font-body tracking-widest text-bamboo-ash dark:text-night-text/60 uppercase mb-1">
            {romaji}
          </span>
          <h3 className="text-xl font-heading font-semibold mb-2">{english}</h3>
          <p className="text-sm text-bamboo-ash dark:text-night-text/50 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default JapaneseCard;

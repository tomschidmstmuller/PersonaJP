import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const GridItem = ({
  children,
  href,
  title,
  thumbnail,
}: {
  children: any;
  href: string;
  title: string;
  thumbnail: StaticImageData;
}) => {
  return (
    <div className="w-full text-left">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group block"
      >
        <div className="waku rounded-none overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            loading="lazy"
            className="w-full aspect-video object-cover object-center img-washi transition-transform duration-500 group-hover:scale-105"
          />
          <div className="p-4 border-t border-washi dark:border-night-border">
            <h4 className="font-heading text-sm font-semibold mb-2 leading-relaxed group-hover:text-vermilion dark:group-hover:text-night-ember transition-colors">
              {title}
            </h4>
            <div className="text-xs text-bamboo dark:text-night-text/60 leading-relaxed [&_em]:text-vermilion dark:[&_em]:text-night-ember [&_em]:not-italic">
              {children}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GridItem;

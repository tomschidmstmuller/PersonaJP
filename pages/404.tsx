import FadeIn from "../components/FadeIn";
import Link from "next/link";
import EnsoIcon from "../components/EnsoIcon";

const Custom404 = () => {
  return (
    <div className="text-center py-20 page-enter">
      <FadeIn>
        <div className="flex justify-center mb-6 text-bamboo-ash/30 dark:text-night-text/20">
          <EnsoIcon size={120} />
        </div>
        <p className="text-xs tracking-[0.3em] text-bamboo-ash/50 dark:text-night-text/30 mb-4 uppercase">
          此処には無い
        </p>
        <p className="text-sm text-bamboo-ash/60 dark:text-night-text/40 mb-10">
          Not in this place
        </p>
        <Link href="/">
          <button className="btn-vermilion text-sm tracking-wider">
            Return home
          </button>
        </Link>
      </FadeIn>
    </div>
  );
};

export default Custom404;

import FadeIn from "../components/FadeIn";
import news from "../data/news.json";
import Link from "next/link";

const News = () => {
  return (
    <div className="page-enter">
      <FadeIn delay={0.1}>
        <h1>お知らせ &mdash; News</h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="space-y-6 mt-8">
          {news.map((item) => (
            <div key={item.date} className="waku p-4 md:p-6">
              <span className="text-xs font-heading text-vermilion dark:text-night-ember tracking-wider block mb-3">
                {item.date}
              </span>
              <div className="space-y-2">
                {item.events.map((event) => (
                  <p
                    key={event}
                    className="text-sm text-bamboo-ash dark:text-night-text/70 leading-relaxed"
                  >
                    {event}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="kumiko-divider" />

      <FadeIn delay={0.3}>
        <div className="text-center">
          <Link href="/microblog">
            <button className="btn-vermilion text-sm tracking-wider">
              微ブログ &mdash; Microblog
            </button>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
};

export default News;

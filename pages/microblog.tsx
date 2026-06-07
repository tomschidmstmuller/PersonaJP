import FadeIn from "../components/FadeIn";
import microblog from "../data/microblog.json";

const Microblog = () => {
  return (
    <div className="page-enter">
      <FadeIn delay={0.1}>
        <h1>和の心 &mdash; Microblog</h1>
        <p className="text-sm text-bamboo-ash dark:text-night-text/60 mt-8 leading-relaxed">
          Microblogging since 2023
        </p>
      </FadeIn>

      {microblog.map((item) => (
        <FadeIn delay={0.2} key={item.title}>
          <div className="mb-10 mt-8">
            <h2
              className="text-base font-heading font-semibold mb-4 tracking-wider text-vermilion dark:text-night-ember"
              style={{ display: "inline-block" }}
            >
              {item.title}
            </h2>
            <div className="space-y-3 mt-4">
              {item.data.map((it) => (
                <div
                  key={it.date}
                  className="flex gap-4 text-sm border-l border-washi-shadow dark:border-night-border pl-4"
                >
                  <span className="text-xs text-bamboo-ash/50 dark:text-night-text/30 w-24 shrink-0 font-mono">
                    {it.date}
                  </span>
                  <p className="text-bamboo-ash dark:text-night-text/70 leading-relaxed">
                    {it.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default Microblog;

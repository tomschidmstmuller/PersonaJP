import { useState } from "react";
import FadeIn from "../components/FadeIn";

const Panels = () => {
  const [selected, setSelected] = useState(0);
  const panels = [
    { title: "Panel A", color: "bg-vermilion/80" },
    { title: "Panel B", color: "bg-amber-500/80" },
    { title: "Panel C", color: "bg-orange-500/80" },
    { title: "Panel D", color: "bg-indigo/80" },
    { title: "Panel E", color: "bg-emerald-600/80" },
  ];

  return (
    <div className="page-enter">
      <FadeIn delay={0.1}>
        <h1>パネル &mdash; Panels</h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="flex justify-between gap-2 h-80 mt-8">
          {panels.map((panel, index) => (
            <button
              className={`${panel.color} ${
                index === selected ? "flex-grow" : "w-10"
              } relative transition-all duration-500 ease-in-out min-w-[2.5rem]`}
              onClick={() => setSelected(index)}
              key={panel.title}
            >
              <span
                className={`${
                  index !== selected && "hidden"
                } absolute left-4 bottom-4 text-white text-sm tracking-wider font-heading`}
              >
                {panel.title}
              </span>
            </button>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default Panels;

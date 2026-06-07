import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article";
}

const FadeIn = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`${className} ${visible ? "visible" : ""}`}
      style={{
        opacity: 0,
        transform: "translateY(16px)",
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        ...(visible && { opacity: 1, transform: "translateY(0)" }),
      }}
    >
      {children}
    </Tag>
  );
};

export default FadeIn;

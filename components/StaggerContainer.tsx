import { useEffect, useRef, useState } from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  delay?: number;
}

const StaggerContainer = ({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}: StaggerContainerProps) => {
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
      className={`stagger-container ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default StaggerContainer;

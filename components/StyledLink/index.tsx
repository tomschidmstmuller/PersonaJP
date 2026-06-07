const StyledLink = ({
  href,
  children,
}: {
  href: string;
  children: any;
}) => {
  return (
    <a
      href={href}
      className="text-vermilion dark:text-night-ember hover-underline transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default StyledLink;

const SocialMediaLink = ({
  href,
  children,
  noBlank,
}: {
  href: string;
  children: any;
  noBlank?: boolean;
}) => {
  return (
    <a
      href={href}
      className="inline-flex items-center text-sm text-bamboo dark:text-night-text/70 hover:text-vermilion dark:hover:text-night-ember transition-colors w-fit gap-1"
      target={noBlank === true ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default SocialMediaLink;

import Link from "next/link";
import { useEffect, useState } from "react";
import EnsembleLogo from "../EnsembleLogo";
import DarkMode from "../DarkMode";

const LinkItem = ({
  href,
  path,
  children,
}: {
  href: string;
  path: string;
  children: any;
}) => {
  const active = href === path;
  return (
    <Link
      href={href}
      className={`nav-link text-sm tracking-widest px-1 ${
        active ? "active" : ""
      }`}
    >
      {children}
    </Link>
  );
};

const HamburgerButton = ({ path }: { path: string }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      className="md:hidden border border-washi dark:border-night-border w-10 h-10 flex justify-center items-center hover:border-vermilion dark:hover:border-night-ember transition-colors"
      onClick={() => setPressed(!pressed)}
      aria-label="Menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <div
        className={`${
          !pressed && "hidden"
        } fixed top-16 right-0 mr-4 w-52 bg-washi-base dark:bg-night-surface border border-washi-shadow dark:border-night-border shadow-lg`}
        onClick={() => setPressed(true)}
        onBlur={() => setPressed(false)}
      >
        <ul>
          <li
            className={`${
              "/works" === path ? "bg-vermilion/10" : "hover:bg-washi-shadow/50 dark:hover:bg-night-border/50"
            }`}
          >
            <Link
              href="/works"
              className="block px-4 py-3 text-sm tracking-wider"
            >
              作品
            </Link>
          </li>
          <li
            className={`${
              "/posts" === path ? "bg-vermilion/10" : "hover:bg-washi-shadow/50 dark:hover:bg-night-border/50"
            }`}
          >
            <Link
              href="/posts"
              className="block px-4 py-3 text-sm tracking-wider"
            >
              記事
            </Link>
          </li>
          <li
            className={`${
              "/news" === path ? "bg-vermilion/10" : "hover:bg-washi-shadow/50 dark:hover:bg-night-border/50"
            }`}
          >
            <Link
              href="/news"
              className="block px-4 py-3 text-sm tracking-wider"
            >
              お知らせ
            </Link>
          </li>
        </ul>
      </div>
    </button>
  );
};

const Navbar = ({ path }: { path: string }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        mounted ? "shoji" : "shoji-fallback"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <EnsembleLogo />

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <LinkItem href="/works" path={path}>
                作品
              </LinkItem>
            </li>
            <li>
              <LinkItem href="/posts" path={path}>
                記事
              </LinkItem>
            </li>
            <li>
              <LinkItem href="/news" path={path}>
                お知らせ
              </LinkItem>
            </li>
            <li>
              <LinkItem href="/microblog" path={path}>
                和の心
              </LinkItem>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <DarkMode />
            <HamburgerButton path={path} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

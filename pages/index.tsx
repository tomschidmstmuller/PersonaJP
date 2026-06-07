import Head from "next/head";
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import JapaneseCard from "../components/JapaneseCard";
import StyledLink from "../components/StyledLink";
import SocialMediaLink from "../components/SocialMediaLink";
import Link from "next/link";
import EnsoIcon from "../components/EnsoIcon";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import kokoroCards from "../data/kokoro-cards.json";
import Banner from "../public/images/banner.png";

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <FadeIn>
        <div className="relative mb-16 min-h-[40vh] flex flex-col justify-center">
          {/* Enso decorative circle */}
          <div className="absolute -top-8 -right-8 opacity-20 hidden md:block text-bamboo-ash dark:text-night-text">
            <EnsoIcon size={200} />
          </div>

          <div className="relative">
            <p className="text-xs tracking-[0.3em] text-bamboo-ash dark:text-night-text/50 mb-4 uppercase">
              ようこそ &mdash; Welcome
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold leading-tight mb-6">
              Yang Tuấn Anh
            </h1>
            <p className="text-base md:text-lg text-bamboo-ash dark:text-night-text/70 leading-relaxed max-w-2xl">
              APCS21 @ VNUHCM &mdash; University of Science, MComp (CS Specialization)
              &mdash; National University of Singapore
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Banner image */}
      <FadeIn delay={0.1}>
        <div className="waku overflow-hidden mb-12">
          <Image
            src={Banner}
            alt="Minecraft base"
            className="w-full aspect-[7/2] object-cover object-center img-washi"
          />
        </div>
      </FadeIn>

      {/* Quote */}
      <FadeIn delay={0.15}>
        <div className="waku p-4 md:p-6 mb-12 text-center">
          <p className="font-heading text-sm md:text-base italic text-bamboo-ash dark:text-night-text/70 leading-relaxed">
            &ldquo;Delusion. Convince yourself.&rdquo;
          </p>
        </div>
      </FadeIn>

      {/* Kokoro Cards */}
      <FadeIn delay={0.2}>
        <h2 className="font-heading text-center mb-8" style={{ display: "block" }}>
          心 &mdash; Kokoro
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-16">
          {kokoroCards.map((card) => (
            <JapaneseCard
              key={card.kanji}
              kanji={card.kanji}
              romaji={card.romaji}
              english={card.english}
              href={card.href}
              description={card.description}
            />
          ))}
        </div>
      </FadeIn>

      <div className="kumiko-divider" />

      {/* About */}
      <FadeIn delay={0.3}>
        <h2>自己紹介 &mdash; About</h2>
        <div className="md:flex gap-8 items-start mt-8">
          <div className="grow">
            <p className="text-sm leading-relaxed text-bamboo-ash dark:text-night-text/70 mb-4">
              I grew up in Ho Chi Minh City, Vietnam. I&apos;m Vietnamese-Taiwanese, and I
              graduated from the{" "}
              <StyledLink href="https://www.hcmus.edu.vn/">
                VNUHCM &mdash; University of Science
              </StyledLink>{" "}
              under the Advanced Program of Computer Science. I&apos;m pursuing positions
              in both industry and academia within Software Engineering and Data Science.
              My interests include{" "}
              <span className="text-vermilion dark:text-night-ember">
                Efficient Computing, Computer Vision, Graph Neural Networks, AI4Sci
                (Geospatial, Remote Sensing, Biomedical)
              </span>
              , and developing robust software systems.
            </p>
          </div>
          <div className="shrink-0 mt-6 md:mt-0 md:ml-6 text-center">
            <div className="waku inline-block overflow-hidden">
              <img
                src="/images/profile.jpeg"
                alt="Profile"
                className="w-28 h-28 object-cover img-washi"
              />
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="kumiko-divider" />

      {/* Works CTA */}
      <FadeIn delay={0.4}>
        <div className="text-center mb-16">
          <h3 className="text-lg font-heading mb-4 tracking-wider">作品 &mdash; Works</h3>
          <Link href="/works">
            <button className="btn-vermilion text-sm tracking-wider">
              View portfolio
            </button>
          </Link>
        </div>
      </FadeIn>

      {/* Bio */}
      <FadeIn delay={0.5}>
        <h2>経歴 &mdash; Bio</h2>
        <div className="space-y-3 mt-8">
          {[
            ["2003", "Born in Ho Chi Minh City, Vietnam"],
            ["2018", "Started high school @ VNU-HCM High School for the Gifted"],
            ["2021", "Started Bachelor's degree in Computer Science @ HCMUS"],
            ["2022", "Interned in Fullstack Engineering @ Tiki &mdash; Worked @ LEAN Social"],
            ["2023", "Interned in Algorithmic Design @ Autonomous.ai"],
            ["2024", "AI Engineer @ Autonomous.ai &mdash; Research Intern @ HySonLab, UAB"],
            ["2025", "Founding Engineer @ Zalos"],
            ["2026", "Master's in CS @ NUS &mdash; Research Intern @ ASI Lab, NUS"],
          ].map(([year, text]) => (
            <div key={year} className="flex gap-4 text-sm">
              <span className="font-heading text-vermilion dark:text-night-ember w-12 shrink-0">
                {year}
              </span>
              <span className="text-bamboo-ash dark:text-night-text/70 leading-relaxed">
                {text}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="kumiko-divider" />

      {/* Interests */}
      <FadeIn delay={0.6}>
        <h2>好 &mdash; Interests</h2>
        <p className="text-sm leading-relaxed text-bamboo-ash dark:text-night-text/70 mt-8">
          <StyledLink href="https://doi.org/10.1117/12.3094417">
            Graph Neural Networks
          </StyledLink>
          ,{" "}
          <StyledLink href="https://www.youtube.com/watch?v=40riCqvRoMs">
            Computer Vision
          </StyledLink>
          ,{" "}
          <StyledLink href="https://huyenchip.com/mlops/">MLOps</StyledLink>,{" "}
          <StyledLink href="https://www.uber.com/en-VN/blog/h3/">
            Databases
          </StyledLink>
          ,{" "}
          <StyledLink href="https://codeforces.com/profile/yanglake_">
            Competitive Programming
          </StyledLink>
          , Minecraft, Music (Kpop, Europop, Classical, OSTs, Breakcore), Languages
          (Vietnamese, English, Mandarin, Spanish), Powerlifting, Communities, Career
          Prep
        </p>
      </FadeIn>

      <div className="kumiko-divider" />

      {/* Contact */}
      <FadeIn delay={0.7}>
        <h2>連絡 &mdash; Contact</h2>
        <div className="space-y-3 mt-8">
          <SocialMediaLink href="https://github.com/YangTuanAnh">
            <AiFillGithub className="mr-2" /> YangTuanAnh &mdash; GitHub
          </SocialMediaLink>
          <SocialMediaLink href="https://www.facebook.com/tuananh.yang.73/">
            <AiFillFacebook className="mr-2" /> Yang Tuấn Anh &mdash; Facebook
          </SocialMediaLink>
          <SocialMediaLink href="https://www.linkedin.com/in/yang-tuan-anh-375759218/">
            <AiFillLinkedin className="mr-2" /> Yang Tuấn Anh &mdash; LinkedIn
          </SocialMediaLink>
          <SocialMediaLink href="mailto:yangtuananh2003@gmail.com" noBlank>
            <AiFillMail className="mr-2" /> yangtuananh2003@gmail.com
          </SocialMediaLink>
        </div>

        <div className="text-center mt-10">
          <Link href="/posts">
            <button className="btn-vermilion text-sm tracking-wider">
              Read blog posts
            </button>
          </Link>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="opacity-50"
            src="https://brainmade.org/88x31-light.png"
            alt="Brain Made"
          />
        </div>
      </FadeIn>
    </div>
  );
}

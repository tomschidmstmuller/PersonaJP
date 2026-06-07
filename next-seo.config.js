const title = "Yang Tuấn Anh — Personal Portfolio";
const description =
  "Personal website of Yang Tuấn Anh — Japanese-inspired portfolio showcasing projects, publications, and thoughts on computer science, AI, and software engineering.";

const SEO = {
  title,
  description,
  canonical: "https://www.yangtuananh.dev",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.yangtuananh.dev",
    title,
    description,
    images: [
      {
        url: "https://yangtuananh.dev/images/banner.png",
        alt: title,
      },
    ],
  },
};

export default SEO;

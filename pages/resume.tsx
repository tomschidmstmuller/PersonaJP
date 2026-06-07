import FadeIn from "../components/FadeIn";

const Resume = () => {
  return (
    <div className="page-enter">
      <FadeIn delay={0.1}>
        <h1>履歴書 &mdash; Resume</h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="text-center mt-8 mb-8">
          <a href="YangTuanAnh_English_CV_Academic.pdf" download>
            <button className="btn-torii text-sm tracking-wider">
              Download CV
            </button>
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="waku overflow-hidden">
          <iframe
            src="YangTuanAnh_English_CV_Academic.pdf"
            width="100%"
            height="800px"
            className="border-0"
            title="Resume"
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default Resume;

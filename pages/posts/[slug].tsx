import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import FadeIn from "../../components/FadeIn";
import useSWR from "swr";
import { useEffect } from "react";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const POSTS_PATH = path.join(process.cwd(), "data", "posts");
  const files = fs
    .readdirSync(POSTS_PATH)
    .filter((filePath) => /\.mdx?$/.test(filePath));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const POSTS_PATH = path.join(process.cwd(), "data", "posts");
  const { slug } = context.params as IParams;
  const source = fs.readFileSync(
    path.join(POSTS_PATH, slug + ".mdx"),
    "utf8"
  );

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: { data, slug, mdxSource },
  };
};

const fetcher = async (args: any) => {
  const res = await fetch(args);
  return res.json();
};

const PostPage = ({ ...props }) => {
  const { data } = useSWR(`/api/views/${props.slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    fetch(`/api/views/${props.slug}`, {
      method: "POST",
    });
  }, [props.slug]);

  return (
    <div className="page-enter">
      <FadeIn delay={0.1}>
        <article>
          <header className="mb-8">
            <span className="text-3xl block mb-4">{props.data.icon}</span>
            <h1 className="text-3xl md:text-4xl font-heading font-semibold leading-tight mb-4">
              {props.data.title}
            </h1>
            <div className="flex justify-between items-center text-xs text-bamboo-ash/60 dark:text-night-text/40 border-b border-washi-shadow dark:border-night-border pb-4">
              <span>{props.data.publishedAt}</span>
              <span>
                {`${Number(views) > 1 ? views.toLocaleString() : "---"} views`}
              </span>
            </div>
          </header>

          <div className="mb-8 overflow-hidden waku">
            <Image
              src={props.data.thumbnail}
              alt={props.data.title}
              width={2000}
              height={2000}
              className="object-cover w-full aspect-video img-washi"
            />
          </div>

          <div className="prose prose-sm max-w-none text-bamboo-ash dark:text-night-text/70 leading-relaxed [&_a]:text-vermilion [&_a]:dark:text-night-ember [&_a]:hover-underline [&_ul]:list-disc [&_ul]:list-inside [&_ol]:list-decimal [&_ol]:list-inside [&_blockquote]:waku [&_blockquote]:p-4 [&_blockquote]:my-4 [&_blockquote]:italic [&_p]:mb-4 [&_img]:mx-auto [&_img]:my-6 [&_hr]:border-washi-shadow [&_hr]:dark:border-night-border [&_hr]:my-8">
            <MDXRemote
              {...props.mdxSource}
              components={{
                a: (props) => (
                  <a
                    className="text-vermilion dark:text-night-ember hover-underline"
                    {...props}
                  />
                ),
                ul: (props) => (
                  <ul
                    className="list-disc list-inside mb-4 space-y-1"
                    {...props}
                  />
                ),
                ol: (props) => (
                  <ol
                    className="list-decimal list-inside mb-4 space-y-1"
                    {...props}
                  />
                ),
                blockquote: (props) => (
                  <blockquote
                    className="waku p-4 my-6 italic text-bamboo-ash dark:text-night-text/60"
                    {...props}
                  />
                ),
                p: (props) => <p className="mb-4" {...props} />,
                img: (props) => (
                  <img
                    className="mx-auto my-8 img-washi waku"
                    {...props}
                  />
                ),
                hr: (props) => (
                  <hr
                    className="border-washi-shadow dark:border-night-border my-8"
                    {...props}
                  />
                ),
              }}
            />
          </div>
        </article>
      </FadeIn>
    </div>
  );
};

export default PostPage;

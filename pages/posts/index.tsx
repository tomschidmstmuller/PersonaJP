import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import BlogCard from "../../components/Blog/BlogCard";
import FadeIn from "../../components/FadeIn";

const Posts = ({ ...props }) => {
  return (
    <div className="page-enter">
      <FadeIn delay={0.1}>
        <h1>記事 &mdash; Posts</h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="space-y-4 mt-8">
          {props.posts.map((post: any) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const POSTS_PATH = path.join(process.cwd(), "data", "posts");
  const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    .filter((filePath) => /\.mdx?$/.test(filePath));

  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath), "utf8");
    const { content, data } = matter(source);
    const slug = filePath.split(".")[0];

    return {
      content,
      data,
      filePath,
      slug,
    };
  });
  posts.sort((a, b) => (a.data.publishedAt > b.data.publishedAt ? -1 : 1));
  return { props: { posts } };
};

export default Posts;

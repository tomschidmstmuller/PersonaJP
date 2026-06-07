import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import useSWR from "swr";

const fetcher = async (args: any) => {
  const res = await fetch(args);
  return res.json();
};

const BlogCard = ({ post }: { post: any }) => {
  const { data } = useSWR(`/api/views/${post.slug}`, fetcher);
  const views = new Number(data?.total);

  return (
    <div className="waku rounded-none hover:border-vermilion dark:hover:border-night-ember transition-colors">
      <Link
        href={"/posts/" + post.slug}
        className="md:flex min-h-full"
        rel="noopener"
      >
        <div className="w-full md:w-40 shrink-0">
          <img
            src={post.data.thumbnail}
            alt={post.data.title}
            className="w-full h-40 md:h-full object-cover img-washi"
          />
        </div>
        <div className="p-4 md:p-5 flex flex-col w-full justify-between">
          <div>
            <h3 className="font-heading text-base font-semibold mb-2 leading-relaxed">
              {post.data.title}
            </h3>
            <p className="text-sm text-bamboo dark:text-night-text/60 leading-relaxed line-clamp-2">
              {post.data.desc}
            </p>
          </div>
          <div className="flex justify-between items-center mt-3 text-xs text-bamboo/60 dark:text-night-text/40">
            <span>{post.data.publishedAt}</span>
            <span>
              <AiOutlineEye className="inline mr-1" />
              {views.toLocaleString()}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;

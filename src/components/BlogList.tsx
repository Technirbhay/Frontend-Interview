import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../api/blogs";
import BlogCard from "./CardBlog";
import type { Blog } from "../types/blog";
import "./BlogList.css";

interface Props {
  onSelectBlog: (blog: Blog) => void;
}

const BlogList = ({ onSelectBlog }: Props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  if (isLoading) return <p className="statusText">Loading blogs...</p>;
  if (isError) return <p className="statusText error">Something went wrong!</p>;

  return (
    <div className="blogList">
      {data?.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onSelectBlog(blog)}
        />
      ))}
    </div>
  );
};

export default BlogList;

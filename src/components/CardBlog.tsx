import type { Blog } from "../types/blog";
import "./CardBlog.css";

interface Props {
  blog: Blog;
  onClick: () => void;
}

const BlogCard = ({ blog, onClick }: Props) => {
  return (
    <div className="blogCard" onClick={onClick}>
      <h3 className="blogTitle">{blog.title}</h3>

      <p className="blogDesc">
        {blog.description}
      </p>

      <div className="blogFooter">
        <span className="blogCategory">
          {blog.category.join(", ")}
        </span>

        <span className="blogDate">
          {new Date(blog.date).toDateString()}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;

import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogs";
import "./BlogDetails.css";

interface Props {
  blogId: number | null;
}

const BlogDetails = ({ blogId }: Props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) return <p className="infoText">Select a blog to view details</p>;
  if (isLoading) return <p className="infoText">Loading blog...</p>;
  if (isError) return <p className="errorText">Error loading blog</p>;

  return (
    <div className="blogDetails">

      {data && (
        <img
          src={data.coverImage}
          alt={data.title}
          className="blogImage"
        />
      )}

      {data && (
        <h1 className="blogTitle">
          {data.title}
        </h1>
      )}

      <div className="blogMeta">
        {data && (
          <span className="blogCategory">
            {data.category.join(", ")}
          </span>
        )}
        {data && (
          <span className="blogDate">
            {new Date(data.date).toDateString()}
          </span>
        )}
      </div>

      {data && (
        <p className="blogContent">
          {data.content}
        </p>
      )}
    </div>
  );
};

export default BlogDetails;

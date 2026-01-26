import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetails from "../components/DetailBlog";
import CreateBlogForm from "../components/CreateBlog";

const Home = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-[1fr_3fr]">
      <div className="flex flex-col gap-6">
        <CreateBlogForm />
        <BlogList onSelectBlog={(blog) => setSelectedBlogId(blog.id)} />
      </div>

      <div className="rounded-lg border border-gray-300 p-6">
        <BlogDetails blogId={selectedBlogId} />
      </div>
    </div>
  );
};

export default Home;

import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetails from "../components/DetailBlog";
import CreateBlogForm from "../components/CreateBlog";
import "./Home.css";

const Home = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="homeContainer">
      <div className="homeSidebar">
        <CreateBlogForm />
        <BlogList onSelectBlog={(blog) => setSelectedBlogId(blog.id)} />
      </div>

      <div className="homeContent">
        <BlogDetails blogId={selectedBlogId} />
      </div>
    </div>
  );
};

export default Home;

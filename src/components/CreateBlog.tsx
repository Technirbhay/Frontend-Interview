import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs";
import "./CreateBlogModal.css";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../components/ui/dialog";



const CreateBlogModal = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setTitle("");
      setDescription("");
      setContent("");
      setCategory("");
      setCoverImage("");
      setOpen(false);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({
      title,
      description,
      content,
      coverImage,
      category: category.split(",").map((c) => c.trim()),
      date: new Date().toISOString(),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="createBtn">
          + Create Blog
        </button>
      </DialogTrigger>

      <DialogContent>

        <form onSubmit={handleSubmit} className="blogForm">

          <input
            className="formInput"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            className="formInput"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            className="formInput"
            placeholder="Cover Image URL"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            required
          />

          <input
            className="formInput"
            placeholder="Categories (comma separated)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <textarea
            className="formTextarea"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <button
            type="submit"
            className="submitBtn"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Creating..." : "Create"}
          </button>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBlogModal;

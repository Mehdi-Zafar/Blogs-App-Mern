import { useState } from "react";
import { useNavigate } from "react-router";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [snippet, setSnippet] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();

    const blog = { title, snippet, content };

    const response = await fetch("/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      setTitle("");
      setSnippet("");
      setContent("");
      setError(null);
      alert("New Blog added!");
      navigate("/");
    } else {
      setError(json.error);
    }
  };

  return (
    <div className="Newblog">
      <h4>Create new blog</h4>
      <form onSubmit={formSubmit}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        <br />
        <label>Snippet:</label>
        <br />
        <textarea
          name="snippet"
          id="snippet"
          cols={40}
          rows={2}
          onChange={(e) => setSnippet(e.target.value)}
          value={snippet}
        ></textarea>
        <br />
        <label>Content:</label>
        <br />
        <textarea
          name="content"
          id="content"
          cols={40}
          rows={8}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        <br />
        <button>Create</button>
      </form>
    </div>
  );
};

export default NewBlog;

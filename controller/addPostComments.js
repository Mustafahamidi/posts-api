import posts from "../db/data.js";
const addPostComments = (req, res, next) => {
  try {
    const { id } = req.params;
    const { text, author } = req.body;

    const post = posts.find((post) => post.id === Number(id));

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (!Array.isArray(post.comments)) {
      post.comments = [];
    }

    const newComment = {
      id: post.comments.length + 1,
      text,
      author,
    };

    post.comments.push(newComment);

    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
};

export default addPostComments;

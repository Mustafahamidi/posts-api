import posts from "../db/data.js";
const createPost = (req, res, next) => {
  try {
    const { title, content, author, date, category, likes, comments } =
      req.body;
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      author,
      date: date || new Date().toISOString(),
      category,
      likes: likes || 0,
      comments,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

export default createPost;

import posts from "../db/data.js";
const getAllpostAndQuery = (req, res, next) => {
  try {
    const { author } = req.query;

    if (author) {
      const searchAuthor = posts.filter((post) => post.author === author);
      return res.status(200).json(searchAuthor);
    }
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};
export default getAllpostAndQuery;

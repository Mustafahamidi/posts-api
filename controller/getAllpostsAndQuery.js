import posts from "../db/data.js"
const getAllpostAndQuery = (req,res,next) =>{
    const { author } = req.query

    if(author){
        const searchAuthor = posts.filter(post => post.author === author)
        return res.status(200).json(searchAuthor)
    }
    res.status(200).json(posts)
}
export default getAllpostAndQuery
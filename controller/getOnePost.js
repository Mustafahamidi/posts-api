import posts from "../db/data.js"
const getOnePost = (req,res,next) => {
    const {id} = req.params

    const post = posts.find(post => post.id === Number(id))

    if(!post){
       return res.status(404).json({message:'Not Found'})
    }
    res.status(200).json(post)
}
export default getOnePost
import posts from "../db/data.js"
const getOnePostComments = (req,res,next) =>{
    const{id} = req.params

    const post = posts.find(post => post.id === Number(id))

     if(!post){
       return res.status(404).json({message:'Not Found'})
    }

    res.json(post.comments)
}
export default getOnePostComments
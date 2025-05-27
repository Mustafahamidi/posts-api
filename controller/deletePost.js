import posts from "../db/data.js"
const deletePost = (req,res,next) => {
    const{id} = req.params
    const numberId = Number(id)
    
    const postIndex = posts.findIndex(post => post.id === numberId)

    if(postIndex === -1){
       return  res.status(404).json({message:'Not Found'})
    }

    const deletePost = posts.splice(postIndex,1)
    res.json(deletePost[0])
}

export default deletePost
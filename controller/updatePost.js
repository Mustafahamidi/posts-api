import posts from "../db/data.js"
const updatePost = (req,res,next) => {
    const {id} = req.params
    const {title, content, author,date,category,likes,comments} = req.body

    const nmberId = Number(id)

    const post = posts.find(post => post.id === nmberId)

    if(!post){
       return  res.status(404).json({message:'Not Found'})
    }

   if(title) post.title = title
   if(content) post.content = content
   if(author) post.author = author
   if(date) post.date = date
   if(category) post.category = category
   if(typeof likes !== 'undefined') post.likes = likes
   if(comments) post.comments = comments

    res.json(post)

    
}

export default updatePost
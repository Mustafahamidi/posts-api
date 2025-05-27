import express from 'express'
import posts from '../db/data.js'
const router = express.Router()

//Get all posts and Query search
router.get('/',(req,res) => {
    const { author } = req.query

    if(author){
        const searchAuthor = posts.filter(post => post.author === author)
        return res.status(200).json(searchAuthor)
    }
    res.status(200).json(posts)
})

//Get one post
router.get('/:id',(req,res) => {
    const {id} = req.params

    const post = posts.find(post => post.id === Number(id))

    if(!post){
       return res.status(404).json({message:'Not Found'})
    }
    res.status(200).json(post)
})

//Get one post and just comment
router.get('/:id/comments',(req,res) => {
    const{id} = req.params

    const post = posts.find(post => post.id === Number(id))

     if(!post){
       return res.status(404).json({message:'Not Found'})
    }

    res.json(post.comments)
})

router.post('/:id/comments', (req, res) => {
  const { id } = req.params;
  const { text, author } = req.body;

  const post = posts.find(post => post.id === Number(id));

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  
  if (!Array.isArray(post.comments)) {
    post.comments = [];
  }

  const newComment = {
    id: post.comments.length + 1,
    text,
    author
  };

  post.comments.push(newComment);

  res.status(201).json(newComment);
});


//Create new post
router.post('/',(req,res) => {
    const {title, content, author,date,category,likes,comments} = req.body
    const newPost = {
        id:posts.length + 1,
        title,
        content,
        author,
        date:date || new Date().toISOString(),
        category,
        likes:likes || 0,
        comments

    }
    posts.push(newPost)
    res.status(201).json(newPost)
})

//Update post
router.put('/:id',(req,res) => {
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

    
})

//Delete post
router.delete('/:id',(req,res) => {
    const{id} = req.params
    const numberId = Number(id)
    
    const postIndex = posts.findIndex(post => post.id === numberId)

    if(postIndex === -1){
       return  res.status(404).json({message:'Not Found'})
    }

    const deletePost = posts.splice(postIndex,1)
    res.json(deletePost[0])
})





export default router
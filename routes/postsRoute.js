import express from 'express'
import getAllpostAndQuery from '../controller/getAllpostsAndQuery.js'
import getOnePost from '../controller/getOnePost.js'
import getOnePostComments from '../controller/getPostAndComments.js'
import addPostComments from '../controller/addPostComments.js'
import createPost from '../controller/createPost.js'
import updatePost from '../controller/updatePost.js'
import deletePost from '../controller/deletePost.js'
const router = express.Router()

//Get all posts and Query search
router.get('/',getAllpostAndQuery)

//Get one post
router.get('/:id',getOnePost)

//Get one post and just comment
router.get('/:id/comments',getOnePostComments)

//One post add comment
router.post('/:id/comments',addPostComments);


//Create new post
router.post('/',createPost)

//Update post
router.put('/:id',updatePost)

//Delete post
router.delete('/:id',deletePost)





export default router
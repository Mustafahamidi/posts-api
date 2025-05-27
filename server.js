import express from 'express'
import router from './routes/postsRoute.js'
import logger from './middleware/logger.js'
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger)
app.use('/api/posts',router)

app.get("/",(req,res) => {
    res.send('hello world')
})

app.listen(PORT,() => {
    console.log(`Server is runing on ${PORT}`)
})
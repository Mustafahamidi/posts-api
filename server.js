import express from 'express'
import router from './routes/postsRoute.js'
import logger from './middleware/logger.js'
import notFoundRouteHandler from './middleware/notFoundRouteHandler.js'
import globalErrorHandler from './middleware/globalErrorHandler.js'
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger)
app.use('/api/posts',router)

// 404 Not Found handler all routes
app.use(notFoundRouteHandler);

//global error handler
app.use(globalErrorHandler);
app.listen(PORT,() => {
    console.log(`Server is runing on ${PORT}`)
})
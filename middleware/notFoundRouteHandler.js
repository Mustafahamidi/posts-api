const notFoundRouteHandler = (req,res,next) =>{
    res.status(404).json({ message: 'Not Found' });
}
export default notFoundRouteHandler
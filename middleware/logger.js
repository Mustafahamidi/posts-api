const logger = (req,res) => {
    console.log(`${req.method}${req.path}`)
}

export default logger
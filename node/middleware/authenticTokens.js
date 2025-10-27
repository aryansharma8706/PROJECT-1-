const authenticateToken = async(req,res, next)=>{
try {
 console.log(req.headers)
    next()
} catch (error) {
    res.status(500).json({
        message : error.message
    })
}
}

module.exports = authenticateToken
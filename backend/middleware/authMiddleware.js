const jwt = require("jsonwebtoken")


module.exports = function(req,res,next){
    const token = req.header("x-auth-token")

    if(!token)
        return res.status(401).json({msg:"No token available"})

    try {
        const decoded = jwt.verify(token, "jakelong")
        req.user = decoded.user
        next()
    } catch (error) {
        res.status(401).json({msg:"Invalid token"})
    }
}
const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")


router.post('/register',async(req,res)=>{
    const {name,email,password} = req.body

    const user = new User({
        name,
        email,
        password:await bcrypt.hash(password,10)
    })

await user.save()

res.json({msg:"User registered"})

})


router.post("/login",async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({msg:"User not found"})
    }
    const depassword = await bcrypt.compare(password,user.password)
    if(!depassword){
        return res.status(400).json({msg:"Invalid credentials"})
    }
    const token = jwt.sign({
        user:{id:user._id}
    },"jakelong")


    res.json({token})
})


module.exports = router
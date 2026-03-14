const express = require("express")
const router = express.Router()
const Bio = require("../models/Bio")
const auth = require("../middleware/authMiddleware")

// CREATE
router.post("/", auth, async(req,res)=>{
    
    const bio = new Bio({
        ...req.body,
        user:req.user.id
    })

    await bio.save()
    res.json(bio)
})


// READ
router.get("/", auth, async(req,res)=>{

    const bios = await Bio.find({user:req.user.id})

    res.json(bios)
})


// UPDATE
router.put("/:id", auth, async(req,res)=>{

    const bio = await Bio.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )

    res.json(bio)
})


// DELETE
router.delete("/:id", auth, async(req,res)=>{

    await Bio.findByIdAndDelete(req.params.id)

    res.json({msg:"Deleted"})
})

module.exports = router
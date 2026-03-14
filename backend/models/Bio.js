const mongoose = require("mongoose")

const bioSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    phone: String,
    address: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Bio",bioSchema)

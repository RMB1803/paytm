const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rammohanofficial03:18032004@cluster0.tm9jl.mongodb.net/paytm_db")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})

const User = mongoose.model("User", userSchema)

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Accounts = mongoose.model("Accounts", accountSchema)

module.exports = {
    User,
    Accounts
}


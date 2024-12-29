const express = require("express")
const zod = require("zod")
const jwt = require("jsonwebtoken")
const { User, Accounts } = require("../db")
const {JWT_SECRET} = require("../config")
const { authMiddleware } = require("../middleware")

const userRouter = express.Router()

const signup = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string(),
    username: zod.string().email()
})

userRouter.post("/signup", async(req, res) => {
    const response = signup.safeParse(req.body)

    if(!response.success) {
        res.status(411).json({
            "message": "Incorrect input(s)"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser) {
        res.status(411).json({
            "message": "Email already taken!"
        })
    }

    const user = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password
    })

    const userId = user._id

    await Accounts.create({
        userId,
        balance: 1 + Math.random()*10000
    })

    const token = jwt.sign({userId}, JWT_SECRET)

    res.json({
        message: "User created successfully!",
        token: token
    })
})

const signin = zod.object({
    password: zod.string(),
    username: zod.string().email()
})

userRouter.post("/signin", async(req, res) => {
    const username = req.body.username
    const password = req.body.password

    const response = signin.safeParse(req.body)

    if(!response.success) {
        res.status(411).json({
            "message": "Incorrect input(s)"
        })
    }

    const user = await User.findOne({
        username: username,
        password: password
    })

    if(!user) {
        res.status(411).json({
            "message": "Email doesn't exist/Error while logging in"
        })
    }

    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET)

    res.json({
        token: token
    })
})

const update = zod.object({
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
    password: zod.string().optional(),
})

userRouter.put("/", authMiddleware, async (req, res) => {
    const response = update.safeParse(req.body)

    if(!response.success) {
        res.status(411).json({
            "message": "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        _id: req.userId
    })

    res.json({
        "message": "Updated successfully"
    })
})

userRouter.get("/bulk", async(req, res) => {
    const filter = req.query.filter || " "

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })

    res.json({
        users: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

module.exports = userRouter

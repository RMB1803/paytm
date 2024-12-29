const express = require("express")
const { authMiddleware } = require("../middleware")
const { Accounts } = require("../db")
const { default: mongoose } = require("mongoose")

const accountRouter = express.Router()

accountRouter.get("/balance", authMiddleware, async(req, res) => {
    const account = Accounts.findOne({
        userId: req.userId
    })

    res.json({
        balance: account.balance
    })
})

accountRouter.post("/transfer", authMiddleware, async(req, res) => {
    const session = await mongoose.startSession()

    session.startTransaction()
    const {amount, to} = req.body

    const account = await Accounts.findOne({userId: req.userId}).session(session)

    if(!account || account.balance < amount) {
        session.abortTransaction()
        res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Accounts.findOne({userId: to}).session(session)

    if(!toAccount) {
        session.abortTransaction()
        res.status(400).json({
            message: "Invalid Account"
        })
    }

    await Accounts.updateOne({userId: req.userId}, {$inc: {balance: -amount}}).session(session)
    await Accounts.updateOne({userId: to}, {$inc: {balance: amount}}).session(session)

    await session.commitTransaction()

    res.json({
        message: "Transfer successful"
    })
})

module.exports = accountRouter
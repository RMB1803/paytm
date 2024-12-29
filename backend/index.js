const express = require("express");
const cors = require("cors")

const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

const rootRouter = require("./routes/index");

app.use("/api/v1", rootRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


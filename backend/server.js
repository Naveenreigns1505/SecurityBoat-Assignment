require("dotenv").config()
const express = require("express")
const app = express()
const cors  = require("cors")
const connection = require("./db")
const userRoutes = require("./router/users")
const authRoutes= require("./router/auth")
const Routes = require("./routes/route")
const tasks = require("./routes/tasks")

connection()

app.use(express.json())
app.use(cors())

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/", Routes)
app.use("/api/tasks", tasks);

const port = process.env.port || 8080

app.listen(port, () => console.log(`Listening on port ${port}`))
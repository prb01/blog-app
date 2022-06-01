require("dotenv").config()
const { Sequelize } = require("sequelize")
const express = require("express")
const app = express()
const blogsRouter = require("./controllers/blogs")
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use("/api/blogs", blogsRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
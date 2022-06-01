const Blog = require("../models/blog")
const blogsRouter = require("express").Router()

blogsRouter.get("/", async (req, res) => {
  const blogs = await Blog.findAll()
  console.log(JSON.stringify(blogs, null, 2))
  res.json(blogs)
})

blogsRouter.post("/", async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body)
    return res.json(newBlog)
  } 
  catch (error) {
    return res.status(400).json({ error })
  }
})

blogsRouter.delete("/:id", async (req, res) => {
  await Blog.destroy({
    where: {
      id: req.params.id,
    },
  })

  return res.status(204)
})

module.exports = blogsRouter

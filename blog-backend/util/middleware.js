const { Blog, User } = require("../models")

const blogFinder = async (req, res, next) => {
  req.blog = await Blog.findByPk(req.params.id)
  next()
}

const userFinder = async (req, res, next) => {
  req.user = await User.findOne({
    where: { username: req.params.username },
  })
  next()
}

const errorHandler = (error, request, response, next) => {
  if (error.name === "SequelizeValidationError") {
    return response
      .status(401)
      .json({ error: error.errors.map((error) => error.message) })
  } else if (error.name === "SyntaxError") {
    return response.status(401).json({ error: `${error}` })
  } else if (error.name === "SequelizeDatabaseError") {
    return response.status(401).json({ error: `${error}` })
  }
  console.log("error name:", error.name)

  next(error)
}

module.exports = {
  blogFinder,
  userFinder,
  errorHandler,
}

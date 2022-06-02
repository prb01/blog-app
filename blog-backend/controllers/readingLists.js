const { ReadingList } = require("../models")
const readingListsRouter = require("express").Router()
const { tokenExtractor } = require("../util/middleware")
const { Op } = require("sequelize")

readingListsRouter.post("/", async (req, res) => {
  const newReadingList = await ReadingList.create(req.body)
  res.json(newReadingList)
})

module.exports = readingListsRouter
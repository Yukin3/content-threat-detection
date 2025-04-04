const express = require("express")
const { classifyContentHandler } = require("../controllers/classifierController")

const router = express.Router()

router.post("/", classifyContentHandler)

module.exports = router

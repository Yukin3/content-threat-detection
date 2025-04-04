const { classifyWithOpenAI } = require("../services/openAIService")

async function classifyContentHandler(req, res) {
  // console.log("➡️ Received request to /api/classify");
  const { content, contentType } = req.body
  // console.log("🔍 Classifying:", { contentType, content: content.slice(0, 80) });

  if (!content || !contentType) {
    return res.status(400).json({ error: "Missing content or contentType" })
  }

  try {
    const result = await classifyWithOpenAI(content, contentType)
    res.json(result)
  } catch (err) {
    console.error("Error in classify controller:", err)
    res.status(500).json({ label: "error", confidence: 0 })
  }
}

module.exports = { classifyContentHandler }

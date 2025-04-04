const OpenAI = require("openai")

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function classifyWithOpenAI(content, contentType) {
  const systemPrompt = getSystemPrompt(contentType)

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content },
    ],
  })

  const response = completion.choices[0].message.content?.trim() || ""
  const match = response.match(/label:\s*(\w+)[,\n]?.*confidence:\s*(\d+)%?/i)

  const label = match?.[1]?.toLowerCase() || "safe"
  const confidence = match?.[2] ? parseFloat(match[2]) / 100 : 0.75

  return { label, confidence }
}

function getSystemPrompt(type) {
  return `You are a cybersecurity and threat intelligence classifier.
You will be given a ${type}. Your task is to determine if it contains or implies any of the following:

- Cybersecurity threats (hacking, malware, DDoS, phishing)
- Financial scams or fraud (impersonation, too-good-to-be-true offers)
- National security or terrorism threats (extremism, violence, unrest)
- Public safety risks (threats to life, bomb threats, organized attacks)

Return your classification in this format:
Label: [malicious / neutral / informational / safe]
Confidence: [percent 0–100]

Be concise. No explanation.`;
}

module.exports = { classifyWithOpenAI }

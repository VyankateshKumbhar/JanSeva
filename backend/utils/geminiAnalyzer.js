const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeComplaint = async (imageUrl, description) => {
  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const prompt = `
You are a smart city complaint analyzer AI.

Analyze the complaint and classify its priority.

Priority rules:
HIGH → fire, accident, exposed wires, flooding
MEDIUM → potholes, garbage, streetlight not working
LOW → minor issues

Return ONLY valid JSON. Do not include markdown or extra text.

Format:
{
  "priority": "HIGH | MEDIUM | LOW",
  "reason": "short explanation"
}

Complaint Description: ${description}
Image URL: ${imageUrl}
`;

    const result = await model.generateContent(prompt);

    let text = result.response.text();

    // Remove markdown formatting if Gemini adds it
    text = text.replace(/```json|```/g, "").trim();

    const parsed = JSON.parse(text);

    return parsed;

  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};

module.exports = { analyzeComplaint };
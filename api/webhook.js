import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import TelegramBot from "node-telegram-bot-api";

const app = express();
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const bot = new TelegramBot(process.env.BOT_TOKEN, { webHook: true });

app.post("/api/webhook", async (req, res) => {
  const message = req.body.message;
  console.log("Incoming message:", message);

  if (!message || !message.text) return res.sendStatus(200);

  const chatId = message.chat.id;
  const userText = message.text;

  if (userText === "/start") {
    await bot.sendMessage(chatId, "أهلاً بيك! 👋 ابعتلي أي سؤال في الدراسات الاجتماعية 💪");
    return res.sendStatus(200);
  }

  const prompt = `
  انت مدرس دراسات اجتماعية مصري.
  جاوب الطالب بطريقة بسيطة وسهلة باللهجة المصرية.
  سؤال الطالب: ${userText}
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "text-bison-001" }); // ✨ غيرنا الموديل
    const result = await model.generateContent(prompt);
    console.log("Gemini response:", result);

    const reply = result.response.text();
    await bot.sendMessage(chatId, reply);
  } catch (err) {
    console.error("Error:", err);
    await bot.sendMessage(chatId, "فيه حاجة حصلت يا بطل، جرّب تاني 💪");
  }

  res.sendStatus(200);
});

// Vercel Serverless
export default function handler(req, res) {
  return app(req, res);
}

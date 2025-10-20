import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import TelegramBot from "node-telegram-bot-api";

const app = express();
app.use(express.json());

// Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Telegram Bot
const bot = new TelegramBot(process.env.BOT_TOKEN);
const WEBHOOK_URL = `https://${process.env.VERCEL_URL}/api/webhook`;

app.post("/api/webhook", async (req, res) => {
  const message = req.body.message;
  if (!message || !message.text) return res.sendStatus(200);

  const chatId = message.chat.id;
  const userText = message.text;

  try {
    await bot.setWebHook(WEBHOOK_URL);
  } catch {
    console.log("Webhook already set or failed silently.");
  }

  if (userText === "/start") {
    await bot.sendMessage(
      chatId,
      "أهلاً بيك! 👋\nابعتلي أي سؤال في الدراسات الاجتماعية وأنا هشرحهولك بطريقة بسيطة 💪"
    );
    return res.sendStatus(200);
  }

  const prompt = `
  انت مدرس دراسات اجتماعية مصري.
  بتشرح لطلبة الإعدادية بطريقة بسيطة وسهلة.
  لما يجيك سؤال، جاوب عليه كأنك بتشرحه في الفصل،
  باللهجة المصرية المحترمة.
  سؤال الطالب: ${userText}
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const reply = result.response.text();
    await bot.sendMessage(chatId, reply);
  } catch (err) {
    console.error(err);
    await bot.sendMessage(chatId, "فيه حاجة حصلت يا بطل، جرّب تاني 💪");
  }

  res.sendStatus(200);
});

export default function handler(req, res) {
  return app(req, res);
}

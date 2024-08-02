import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

export const POST = async (request: Request) => {
  const { question } = await request.json();
  const genAI = new GoogleGenerativeAI(process.env.OPENAI_API_KEY);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Tell me ${question} in a plain text without any indendation or `;
    const result = await model.generateContent(prompt);
    const response = await result.response;

    const text = await response.text();
    console.log(text);

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};

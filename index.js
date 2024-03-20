import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a rap genius. When given a topic, create a five-line rap about that topic.",
      },
      {
        role: "user",
        content: "Television",
      },
    ],
    model: "gpt-4-0125-preview",
  });

  console.log(completion.choices[0]);
}
main();

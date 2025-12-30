import { Ollama } from "ollama";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const ollama = new Ollama({
      host: "https://ollama.com",
      headers: {
        Authorization: `Bearer ${process.env.OLLAMA_API_KEY}`,
      },
    });

    const response = await ollama.chat({
      model: "gpt-oss:20b-cloud",
      messages: [{ role: "user", content: message }],
    });

    console.log(response)

    return Response.json({ answer: response.message.content });
  } catch (error) {
    console.log(error)
  }
}

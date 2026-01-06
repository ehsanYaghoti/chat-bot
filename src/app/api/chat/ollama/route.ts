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

    console.log(response);

    return Response.json({ answer: response.message.content });
  } catch (error: unknown) {
    // console.log(error)

    if (typeof error === "object" && error !== null) {
      const err = error as {
        error?: string;
        name?: string;
        status_code?: number;
      };

      if (err.status_code === 403) {
        return Response.json(
          { answer: "Access forbidden. Check API key or region." },
          { status: 403 }
        );
      }


      return Response.json(
          { answer: err.error ?? "Unknown error occured" },
          { status: err.status_code ?? 500 }
        );

    }

    return Response.json({ answer: "Unexpected Error" } , {status : 500});
  }
}

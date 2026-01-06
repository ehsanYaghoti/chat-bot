import { OpenRouter } from "@openrouter/sdk";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const openRouter = new OpenRouter({
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await openRouter.chat.send({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      stream: false,
    });

    return Response.json({ answer: completion.choices[0].message.content });
  } catch (error: unknown) {
    console.log(error);

    if (error instanceof Error) {
      return Response.json({ answer: error.message }, { status: 500 });
    }

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

    return Response.json({ answer: "Unexpected Error" }, { status: 500 });
  }
}

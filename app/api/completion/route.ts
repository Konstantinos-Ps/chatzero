import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import * as zod from "zod";

const promptSchema = zod.object({
  prompt: zod.string(),
  isTitle: zod.boolean(),
  messageId: zod.string(),
  threadId: zod.string(),
});

export async function POST(request: NextRequest) {
  const headersList = await headers();
  const googleApiKey = headersList.get("X-Google-API-Key");

  if (!googleApiKey) {
    return NextResponse.json(
      {
        error: "Google API key is required to enable chat title generation.",
      },
      { status: 400 },
    );
  }

  try {
    const body = await request.json();

    const validationResult = promptSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid request body",
          details: validationResult.error.format(),
        },
        { status: 400 },
      );
    }

    const { prompt, isTitle, messageId, threadId } = validationResult.data;

    const google = createGoogleGenerativeAI({
      apiKey: googleApiKey,
    });

    const { text: title } = await generateText({
      model: google("gemini-2.5-flash"),
      system: `\n
      - you will generate a short title based on the first message a user begins a conversation with
      - ensure it is not more than 80 characters long
      - the title should be a summary of the user's message
      - you should NOT answer the user's message, you should only generate a summary/title
      - do not use quotes or colons`,
      prompt,
    });

    return NextResponse.json({ title, isTitle, messageId, threadId });
  } catch (error) {
    console.error("Failed to generate title:", error);
    return NextResponse.json(
      { error: "Failed to generate title" },
      { status: 500 },
    );
  }
}

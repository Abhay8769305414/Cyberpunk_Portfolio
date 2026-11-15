import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const event = req.headers.get("x-github-event");
    const secret = req.nextUrl.searchParams.get("secret");
    const expectedSecret = process.env.REVALIDATION_SECRET;

    // Optional secret verification if configured
    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json(
        { message: "Invalid revalidation secret", code: "UNAUTHORIZED" },
        { status: 401 }
      );
    }

    // Support GitHub push, repository, or generic ping
    console.log(`[REVALIDATE] Webhook triggered. Event: ${event || "manual"}`);

    // Revalidate github-repos tag and home page
    revalidateTag("github-repos");
    revalidatePath("/");

    return NextResponse.json({
      revalidated: true,
      timestamp: new Date().toISOString(),
      event: event || "manual",
      message: "GitHub repository cache successfully purged and revalidated.",
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { message: "Revalidation failed", error: errorMsg },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const expectedSecret = process.env.REVALIDATION_SECRET;

  if (expectedSecret && secret !== expectedSecret) {
    return NextResponse.json(
      { message: "Invalid revalidation secret", code: "UNAUTHORIZED" },
      { status: 401 }
    );
  }

  revalidateTag("github-repos");
  revalidatePath("/");

  return NextResponse.json({
    revalidated: true,
    timestamp: new Date().toISOString(),
    status: "SYSTEM_CACHE_PURGED",
    message: "GitHub live sync revalidated via GET trigger.",
  });
}

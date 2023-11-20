import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  if (!searchParams || !searchParams.get("link")) {
    return new Response("Not Found", { status: 404 });
  }
  try {
    const link = searchParams.get("link");
    const mediumCacheLink = "https://webcache.googleusercontent.com/search?q=cache:";
    const mediumCacheEnding = "&strip=1&vwsrc=0";
    const fullLink = mediumCacheLink + link + mediumCacheEnding;

    const response = await fetch(fullLink);
    console.log(JSON.stringify(response))
    const text = await response.text();

    return new Response(text, {
      headers: { "Content-Type": "text/html" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    return new Response("Error fetching content", { status: 500 });
  }
  return Response.json({ succes: "hj" });
}

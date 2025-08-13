import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const fileId = url.searchParams.get("fileId");

  if (!fileId) {
    return NextResponse.json({ error: "Missing fileId" }, { status: 400 });
  }

  const driveUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;

  try {
    const response = await fetch(driveUrl);

    if (!response.ok) {
      return NextResponse.json({ error: `Failed to fetch image, status ${response.status}` }, { status: 500 });
    }

    const arrayBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");

    const contentType = response.headers.get("content-type") || "image/jpeg";

    return NextResponse.json({
      base64: `data:${contentType};base64,${base64}`
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

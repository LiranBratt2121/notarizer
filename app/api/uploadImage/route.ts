import { drive } from "@/lib/googleDrive";
import { NextRequest, NextResponse } from "next/server";
import { Readable } from "node:stream";

export async function POST(req: NextRequest) {
  try {
    const { base64Image, fileName } = await req.json();
    const buffer = Buffer.from(base64Image, "base64");

    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        mimeType: "image/png",
      },
      media: {
        mimeType: "image/png",
        body: Readable.from(buffer),
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
import { drive } from "@/lib/googleDrive";
import { NextRequest, NextResponse } from "next/server";
import { Readable } from "node:stream";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());

        const response = await drive.files.create({
            requestBody: {
                name: file.name,
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

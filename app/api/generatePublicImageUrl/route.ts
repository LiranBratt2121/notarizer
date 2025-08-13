import { drive } from "@/lib/googleDrive";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { fileId } = await req.json();
        if (!fileId) {
            return NextResponse.json({ error: "Missing fileId" }, { status: 400 });
        }

        await drive.permissions.create({
            fileId,
            requestBody: {
                role: "reader",
                type: "anyone"
            }
        });

        const { data } = await drive.files.get({
            fileId,
            fields: "webViewLink,webContentLink"
        });

        return NextResponse.json({
            webViewLink: data.webViewLink,
            webContentLink: data.webContentLink
        });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { error: error?.message || "file permissions manipulation failed" },
            { status: 500 }
        );
    }
}
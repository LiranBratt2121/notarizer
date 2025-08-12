import { drive } from "@/lib/googleDrive";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { fileId } = await req.json();

    const response = await drive.files.delete({
        fileId
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "delete failed" }, { status: 500 });
  }
}
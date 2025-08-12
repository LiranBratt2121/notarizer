"use client";

export function useGoogleDrive() {
    async function uploadImage(base64Image: string, fileName: string) {
        const response = await fetch("/api/uploadImage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ base64Image, fileName }),
        });

        if (!response.ok) {
            throw new Error("Upload failed");
        }
        return response.json();
    }


    async function deleteImage(fileId: string) {
        const response = await fetch("/api/deleteImage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fileId })
        })

        if (!response.ok) {
            throw new Error("Delete operation faild")
        }

        return response.json();
    }

    async function generatePublicImageUrl(fileId: string) {
        const response = await fetch("/api/generatePublicImageUrl", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fileId })
        });

        if (!response.ok) {
            throw new Error("file permissions manipulation failed");
        }

        return response.json();
    }

    async function uploadAndGetUrl(base64Image: string, imageName: string) {
        const { id } = await uploadImage(base64Image, imageName);
        const { webViewLink, webContentLink } = await generatePublicImageUrl(id);

        return {
            webViewLink, webContentLink
        }
    }

    return { uploadImage, deleteImage, generatePublicImageUrl, uploadAndGetUrl };
}
"use client";

export function useGoogleDrive() {
    async function uploadImage(base64Image: string, fileName: string) {
        const byteString = atob(base64Image);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const intArray = new Uint8Array(arrayBuffer);

        for (let i = 0; i < byteString.length; i++) {
            intArray[i] = byteString.charCodeAt(i);
        }

        const blob = new Blob([intArray], { type: "image/png" });

        const formData = new FormData();
        formData.append("file", blob, fileName);

        const response = await fetch("/api/uploadImage", {
            method: "POST",
            body: formData
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

    async function fetchDriveImageBase64(fileId: string) {
        const res = await fetch(`/api/driveToBase64?fileId=${encodeURIComponent(fileId)}`);
        if (!res.ok) {
            throw new Error("Failed to get Base64 from server");
        }

        const data = await res.json();

        return data.base64 as string;
    }

    async function uploadAndGetUrl(base64Image: string, imageName: string) {
        const { id } = await uploadImage(base64Image, imageName);
        const { webViewLink, webContentLink } = await generatePublicImageUrl(id);

        return {
            webViewLink,
            webContentLink
        }
    }

    return { uploadImage, deleteImage, generatePublicImageUrl, uploadAndGetUrl, fetchDriveImageBase64};
}
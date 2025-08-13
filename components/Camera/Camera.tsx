import { useEffect, useRef, useState } from "react";
import {
    CameraWrapper,
    TopBar,
    VideoFeed,
    BottomBar,
    ShutterButton,
    PreviewImage,
    PreviewControls,
    PreviewButton,
} from "./Camera.styles";

import { IoMdReturnLeft } from "react-icons/io";

interface CameraProps {
    savePhoto: (photo: string) => void;
    onExitCameraMode: () => void;
}

const BASE64_PREFIX = "data:image/png;base64,";

export const Camera = ({ savePhoto, onExitCameraMode: existCameraMode }: CameraProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState<string | null>(null);
    const [photo, setPhoto] = useState<string | null>(null);

    useEffect(() => {
        async function startCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "environment" },
                    audio: false,
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }

            } catch {
                setError("Unable to access camera");
            }
        }
        startCamera();

        return () => {
            if (videoRef.current?.srcObject) {
                (videoRef.current.srcObject as MediaStream)
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, [photo]);

    function takePhoto() {
        if (!videoRef.current) {
            return;
        }

        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
            return;
        }

        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        setPhoto(canvas.toDataURL("image/png").replace(BASE64_PREFIX, ""));
    }

    const handleRetake = () => {
        setPhoto(null);
    }

    return (
        <CameraWrapper>
            <TopBar>
                <span>Notarizer</span>
                <IoMdReturnLeft size={24} onClick={existCameraMode} />
            </TopBar>
            {!photo ? (
                <>
                    <VideoFeed ref={videoRef} autoPlay playsInline muted />
                    <BottomBar>
                        <ShutterButton onClick={takePhoto} />
                    </BottomBar>
                </>
            ) : (
                <>
                    <PreviewImage src={BASE64_PREFIX + photo} alt="Captured" />
                    <PreviewControls>
                        <PreviewButton onClick={handleRetake}>Retake</PreviewButton>
                        <PreviewButton onClick={() => savePhoto(photo)}>Save</PreviewButton>
                    </PreviewControls>
                </>
            )}
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        </CameraWrapper>
    );
};
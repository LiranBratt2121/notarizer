"use client";

import React from "react";
import { useGoogleDrive } from "@/hooks/useGoogleDrive";

const Page = () => {
  const { uploadImage } = useGoogleDrive();

  React.useEffect(() => {
    uploadImage("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=", "fileName").then((response) => {
      console.log(response);
    });
  });

  return <h1>Hello world</h1>;
};

export default Page;
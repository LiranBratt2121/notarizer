import type { Metadata } from "next";
import MenuBar from "@/components/MenuBar/MenuBar";
import { GlobalStyles } from "@/styles/GlobalStyles";

export const metadata: Metadata = {
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <GlobalStyles />
      <body>
        <MenuBar />

        {children}
      </body>
    </html>
  );
}

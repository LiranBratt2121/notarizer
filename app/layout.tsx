import type { Metadata } from "next";
import MenuBar from "@/components/MenuBar/MenuBar";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { AuthProvider } from "@/context/AuthContext";

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

        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

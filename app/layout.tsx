import type { Metadata } from "next";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar/Navbar";

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
        <Navbar />

        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

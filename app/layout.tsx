import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Abaseen's Work",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-stone-900 text-stone-300">
                {children}
            </body>
        </html>
    );
}

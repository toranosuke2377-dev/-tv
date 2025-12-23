import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto" });

export const metadata: Metadata = {
    title: "補助金ポータル | ビジネスを加速させる補助金検索",
    description: "全国の補助金・助成金情報を即座に検索。あなたのビジネスに最適な公的支援を見つけましょう。",
};

import Header from "@/components/Header";
import AIChatButton from "@/components/AIChatButton";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${inter.variable} ${noto.variable} font-sans antialiased`}>
                <Header />
                <main className="pt-[112px]">
                    {children}
                </main>
                <AIChatButton />
            </body>
        </html>
    );
}

import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import {getTranslations} from '@/utils/i18n';

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Alex Ovechkin",
    description: "My portfolio",
};

export default async function RootLayout({children, params}:LayoutProps) {
    const {lang} = await params;
    return (
        <html lang={lang}>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
          </body>
        </html>
    );
}

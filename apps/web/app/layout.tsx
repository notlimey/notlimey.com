import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Toaster } from "@components/ui/sonner";
import { ThemeProvider } from "@common/providers/theme-provider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Martin's portfolio",
		default: "Martin's portfolio",
	},
	description: "Martin's portfolio website. Showing of blogs and projects.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}

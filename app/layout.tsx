import "@/assets/css/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
	title: "DRIP Calculator",
	description:
		"A simple DRIP investment calculator to help estimate your future net worth",
	robots: "noindex",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}

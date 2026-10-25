import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Galumbra Supreme",
  description:
    "Galumbra Supreme — Where ideas rise. Where communities evolve.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

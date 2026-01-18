import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const khTeka = localFont({
  src: [
    { path: "../public/fonts/KHTekaTRIAL-Light.woff2", weight: "300" },
    { path: "../public/fonts/KHTekaTRIAL-Regular.woff2", weight: "400" },
    { path: "../public/fonts/KHTekaTRIAL-Medium.woff2", weight: "500" },
    { path: "../public/fonts/KHTekaTRIAL-Bold.woff2", weight: "700" },
  ],
  variable: "--font-kh-teka",
});

const khTekaMono = localFont({
  src: [
    { path: "../public/fonts/KHTekaMonoTRIAL-Book.woff2", weight: "300" },
    { path: "../public/fonts/KHTekaMonoTRIAL-Regular.woff2", weight: "400" },
    { path: "../public/fonts/KHTekaMonoTRIAL-Medium.woff2", weight: "500" },
    { path: "../public/fonts/KHTekaMonoTRIAL-Bold.woff2", weight: "700" },
  ],
  variable: "--font-kh-teka-mono",
});

export const metadata: Metadata = {
  title: "Alex Gutierrez - Fullstack Developer",
  description: "Portfolio website of Alex Gutierrez, Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${khTeka.variable} ${khTekaMono.variable} font-sans antialiased`}
      >
        {children}
        <footer className="flex items-center justify-center gap-2 py-8 text-sm text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          Based in the{" "}
          <span className="font-medium text-foreground">Basque Country, Spain</span>
          {" "}•{" "}
          <span className="font-medium text-primary">Open to remote</span>
          {" "}worldwide
        </footer>
      </body>
    </html>
  );
}

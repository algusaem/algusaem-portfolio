import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Portfolio Alex Gutierrez",
  description: "Portfolio Alex Gutierrez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

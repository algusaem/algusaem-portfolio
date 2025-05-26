"use client";
import { ColorModeScript, Container, Flex, Text } from "@chakra-ui/react";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/NavBar/NavBar";
import { theme } from "@/theme/theme";

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
    <html style={{ scrollBehavior: "smooth" }}>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <Container w={"100vw"} h={"100vh"}>
            <NavBar />
            {children}
            <footer>
              <Flex w={"100%"} justify={"center"} pb={4}>
                <Text fontSize={"sm"}>© 2025 Alex Gutierrez</Text>
              </Flex>
            </footer>
          </Container>
        </Providers>
      </body>
    </html>
  );
}

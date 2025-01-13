"use client"

import { ReactNode } from "react";
import StyledComponentsRegistry from "./registry";
import { Poppins } from "next/font/google";
import { Sidebar } from "./components/sidebar";

import { GlobalStyle } from "./styles";


const poppins = Poppins({ subsets: ["latin"], weight: "600" });

interface Props {
  children?: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Sidebar>
            {children}
          </Sidebar>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

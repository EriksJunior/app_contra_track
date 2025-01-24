"use client"

import "react-toastify/dist/ReactToastify.css";

import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/theme";

import StyledComponentsRegistry from "./registry";

import { Sidebar } from "../components/sidebar";

import { GlobalStyle } from "./styles";
import { usePathname } from "next/navigation";
import { Account } from "@/components/account";


const poppins = Poppins({ subsets: ["latin"], weight: "600" });

interface Props {
  children?: ReactNode;
}

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();

  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyle />
            {pathname === "/" ? <Account /> : <Sidebar>{children}</Sidebar>}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

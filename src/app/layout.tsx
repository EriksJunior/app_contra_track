import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

interface Props {
  children?: ReactNode;
}

export const metadata = {
  title: "Contra Track",
  description:
    "Veja aqui todos os ducomentos fiscais emitidos para você!",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        {children}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>Layout default</p>
        </div>
      </body>
    </html>
  );
}

"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
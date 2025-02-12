"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextThemesProvider attribute={"class"} defaultTheme="system" enableSystem>
            {children}
        </NextThemesProvider>
    )
};
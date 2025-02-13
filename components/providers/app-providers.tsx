"use client"

import { ReactNode, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const AppProviders = ({ children }: { children: ReactNode }) => {

    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <NextThemesProvider attribute={"class"} defaultTheme="system" enableSystem>
                {children}
            </NextThemesProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
};
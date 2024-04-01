'use client';
import { ReactNode } from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({children, ...props}: ThemeProviderProps){
    return (
        <NextThemesProvider {...props}>
            {children}
        </NextThemesProvider>
    )
}
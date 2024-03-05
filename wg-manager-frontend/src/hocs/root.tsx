import { TopBar } from "@/pages/global/top-bar.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import React from "react";

export default function withRoot(Component: React.ComponentType<any>) {

    function WithRoot(props: any) {
        return (
            <ThemeProvider>
            <TopBar />
            <Component {...props} />
            </ThemeProvider>
        );
    }
    return WithRoot;
}
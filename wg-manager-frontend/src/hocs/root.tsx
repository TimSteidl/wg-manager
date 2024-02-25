import { TopBar } from "@/pages/global/top-bar.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";

export function withRoot(children: () => JSX.Element) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TopBar />
      {children()}
    </ThemeProvider>
  );
}

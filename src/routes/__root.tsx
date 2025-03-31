import { ThemeProvider } from "@/components/shared/theme-provider";
import RootLayout from "@/layouts/root-layout";
import { createRootRoute, useLocation } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const isSettingsPage = location.pathname === "/settings";

    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RootLayout isSettingsPage={isSettingsPage} />
      </ThemeProvider>
    );
  },
});

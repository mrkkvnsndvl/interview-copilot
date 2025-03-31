import FooterIndex from "@/components/shared/footer-index";
import FooterSettings from "@/components/shared/footer-settings";
import Header from "@/components/shared/header";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

interface RootLayoutProps {
  isSettingsPage: boolean;
}

export default function RootLayout({ isSettingsPage }: RootLayoutProps) {
  return (
    <div
      className={`font-geist grid ${isSettingsPage ? "grid-rows-8" : "grid-rows-7"} w-[600px] h-[600px] border`}
    >
      <Header />
      <main className="row-start-2 row-end-8">
        <Outlet />
      </main>
      {isSettingsPage ? <FooterSettings /> : <FooterIndex />}
      <TanStackRouterDevtools />
    </div>
  );
}

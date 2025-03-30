import FooterIndex from '@/components/shared/footer-index';
import FooterSettings from '@/components/shared/footer-settings';
import Header from '@/components/shared/header';
import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const isSettingsPage = location.pathname === "/settings";

    return (
      <div
        className={`font-geist grid  ${isSettingsPage ? "grid-rows-8" : "grid-rows-7"} w-[600px] h-[600px] border`}
      >
        <Header />
        <main className="row-start-2 row-end-8">
          <Outlet />
        </main>
        {isSettingsPage ? <FooterSettings /> : <FooterIndex />}
        <TanStackRouterDevtools />
      </div>
    );
  },
});

import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLayout from "@/components/organisms/AppLayout";
import NotFound from "@/pages/NotFound";
import Loader from "@/pages/Loader";

const Home = lazy(() => import("@/pages/Home/Home"));

const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<Loader />}>{element}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: withSuspense(<Home />),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

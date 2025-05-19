import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <Header />
      <main className="w-full max-w-7xl mx-auto flex-1 p-4 sm:px-6 md:p-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

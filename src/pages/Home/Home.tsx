import { MainSection } from "./components/MainSection";
import { CartSidebar } from "@/components/organisms/CartSidebar";

export default function Home() {
  return (
    <>
      <CartSidebar />
      <MainSection />
    </>
  );
}

import { Overlay } from "../atoms/Overlay";
import { useCart } from "@/contexts/CartContext";

interface RightSidebarProps {
  children: React.ReactNode;
}

export const RightSidebar = ({ children }: RightSidebarProps) => {
  const { isOpen, closeCart } = useCart();

  return (
    <Overlay isOpen={isOpen}>
      <section
        id="outside-of-sidebar"
        className="w-3/4 bg-background-primary opacity-50"
        onClick={() => closeCart()}
      ></section>
      <section
        id="sidebar"
        className="w-1/4 min-w-96 border-l-4 border-border p-5 bg-background-primary flex flex-col justify-between text-primary"
      >
        {children}
      </section>
    </Overlay>
  );
};

import { useState } from "react";
import { Overlay } from "../atoms/Overlay";

interface RightSidebarProps {
  children: React.ReactNode;
}

export const RightSidebar = ({ children }: RightSidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Overlay isOpen={isSidebarOpen}>
      <section
        id="outside-of-sidebar"
        className="w-3/4 bg-background-primary opacity-50"
        onClick={() => setIsSidebarOpen(false)}
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

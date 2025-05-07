interface OverlayProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

export const Overlay = ({ isOpen, children }: OverlayProps) => {
  return (
    <div
      className={`${
        isOpen ? "" : "translate-x-full"
      } h-screen w-screen fixed top-0 left-0 flex z-50 ease-in-out transition duration-200`}
    >
      {children}
    </div>
  );
};

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/atoms/NavLink";
import { useClickOutside } from "@/hooks/useClickOutside";
import { navItems } from "@/constants/navItems";
import { motion, AnimatePresence } from "framer-motion";
import { scaleIn } from "@/lib/motionPresets";
import { Button } from "../atoms/Button";

export const HeaderMobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useClickOutside(() => setMenuOpen(false));

  return (
    <div className="md:hidden relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {menuOpen ? <X /> : <Menu />}
      </Button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 top-full mt-2 w-fit rounded-md bg-background-secondary dark:bg-background-secondary-dark shadow-lg py-2 px-4 space-y-2 z-50"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

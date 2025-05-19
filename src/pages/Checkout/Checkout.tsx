import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { FormCheckout } from "./components/Form/FormCheckout";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <main className="space-y-10 rounded-md">
      <ButtonIcon Icon={MoveLeft} onClick={() => navigate("/")} />
      <FormCheckout />
    </main>
  );
}

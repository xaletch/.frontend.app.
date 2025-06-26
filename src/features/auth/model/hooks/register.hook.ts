import { toast } from "sonner";
import { useRegisterMutation } from "../services/auth.service";
import type { RegisterErrorResponse, RegisterRequest } from "../types/register.type";
import type { RegisterType } from "../schema/register.schema";
import { useNavigate } from "@tanstack/react-router";

interface UseRegisterReturnProps {
  onSubmit: (data: RegisterType) => Promise<void>;
  isLoading: boolean;
}

export const useRegister = (): UseRegisterReturnProps => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const onSubmit = async (data: RegisterType): Promise<void> => {
    try {
      const req = {
        name: data.name,
        email: data.email,
        password: data.password,
      } as RegisterRequest;
      
      await register(req).unwrap();
      navigate({ to: "/", replace: true });
    } catch (err) {
      const error = err as RegisterErrorResponse;
      toast.error("Ошибка!", { description: error.data.message });
    }
  };

  return {
    onSubmit,
    isLoading,
  }
};
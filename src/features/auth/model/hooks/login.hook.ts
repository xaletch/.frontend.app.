import { toast } from "sonner";
import type { LoginType } from "../schema/login.schema";
import { useLoginMutation } from "../services/auth.service";
import type { LoginErrorResponse } from "../types/login.type";
import { useNavigate } from "@tanstack/react-router";

interface UseLoginReturnProps {
  onSubmit: (data: LoginType) => Promise<void>;
  isLoading: boolean;
}

export const useLogin = (): UseLoginReturnProps => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: LoginType): Promise<void> => {
    try {
      await login(data).unwrap();
      navigate({ to: "/", replace: true });
    } catch (err) {
      const error = err as LoginErrorResponse;
      toast.error("Ошибка!", { description: error.data.message });
    }
  };

  return {
    onSubmit,
    isLoading,
  }
};
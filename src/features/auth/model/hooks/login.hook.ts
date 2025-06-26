import { toast } from "sonner";
import type { LoginType } from "../schema/login.schema";
import { useLoginMutation } from "../services/auth.service";
import type { LoginErrorResponse } from "../types/login.type";

interface UseLoginReturnProps {
  onSubmit: (data: LoginType) => Promise<void>;
  isLoading: boolean;
}

export const useLogin = (): UseLoginReturnProps => {
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: LoginType) => {
    try {
      await login(data).unwrap();
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
import { toast } from "sonner";
import { useRegisterMutation } from "../services/auth.service";
import type { RegisterErrorResponse, RegisterRequest } from "../types/register.type";
import type { RegisterType } from "../schema/register.schema";

interface UseRegisterReturnProps {
  onSubmit: (data: RegisterType) => Promise<void>;
  isLoading: boolean;
}

export const useRegister = (): UseRegisterReturnProps => {
  const [register, { isLoading }] = useRegisterMutation();

  const onSubmit = async (data: RegisterType) => {
    try {
      const req = {
        name: data.name,
        email: data.email,
        password: data.password,
      } as RegisterRequest;
      
      const res = await register(req).unwrap();
      console.log(res);
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
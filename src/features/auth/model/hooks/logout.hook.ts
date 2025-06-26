import { useLogoutMutation } from "../services/auth.service";
import { toast } from "sonner";

interface UseLogoutReturnProps {
  logout (): Promise<void>;
}

export const useLogout = (): UseLogoutReturnProps => {
  const [onLogout] = useLogoutMutation();

  const logout = async (): Promise<void> => {
    try {
      await onLogout().unwrap();
      toast.message('Вы успешно вышли из системы');
    }
    catch (err) {
      console.error('Не удалось выйти из системы', err);
    }
  };

  return { logout };
}
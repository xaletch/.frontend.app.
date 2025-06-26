import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email('Неккоректный email').min(1, 'Введите email'),
  password: z.string().min(8, 'Пароль должен быть не менее 8 символов'),
});
export type LoginType = z.infer<typeof LoginSchema>;
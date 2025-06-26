import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, 'Введите имя'),
  email: z.string().email('Неккоректный email').min(1, 'Введите email'),
  password: z.string().min(8, 'Пароль должен быть не менее 8 символов'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, { message: 'Пароли не совпадают', path: ['confirmPassword'] });

export type RegisterType = z.infer<typeof RegisterSchema>;
import { API } from "@/shared/api";
import type { LoginType } from "../schema/login.schema";
import type { RegisterRequest } from "../types/register.type";
import type { AuthResponse } from "../types/auth.type";

export const AuthAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginType>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { 
  useLoginMutation, 
  useRegisterMutation, 
  useLogoutMutation,
} = AuthAPI;
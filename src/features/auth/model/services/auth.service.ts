import { API } from "@/shared/api";
import type { LoginType } from "../schema/login.schema";
import type { LoginResponse } from "../types/login.type";
import type { RegisterRequest, RegisterResponse } from "../types/register.type";

export const AuthAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginType>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
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
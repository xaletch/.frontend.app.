import { API } from "@/shared/api";
import type { Account } from "../types/account.type";

export const AccountApi = API.injectEndpoints({
  endpoints: (builder) => ({
    getAccount: builder.query<Account, void>({
      query: () => ({
        url: "profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAccountQuery } = AccountApi;
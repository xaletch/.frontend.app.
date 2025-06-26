import { API } from "@/shared/api";
import type { IAccount } from "../..";

export const AccountApi = API.injectEndpoints({
  endpoints: (builder) => ({
    getAccount: builder.query<IAccount, void>({
      query: () => ({
        url: "profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAccountQuery } = AccountApi;
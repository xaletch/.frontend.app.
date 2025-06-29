import { API } from "@/shared/api";
import type { GetThemeParams, Theme } from "../../";

export const ThemeApi = API.injectEndpoints({
  endpoints: (builder) => ({
    getThemes: builder.query<Theme[], GetThemeParams>({
      query: (params) => ({
        url: "theme",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetThemesQuery } = ThemeApi;
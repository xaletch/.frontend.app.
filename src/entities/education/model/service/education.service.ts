import { API } from "@/shared/api";
import type { EducationCreateRequest, EducationCreateResponse, Education } from "../../";

export const EducationApi = API.injectEndpoints({
  endpoints: (builder) => ({
    getEducationList: builder.query<Education[], void>({
      query: () => ({
        url: "education",
        method: "GET",
      }),
    }),
    createEducation: builder.mutation<EducationCreateResponse, EducationCreateRequest>({
      query: () => ({
        url: "education",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetEducationListQuery,
  useCreateEducationMutation,
} = EducationApi;
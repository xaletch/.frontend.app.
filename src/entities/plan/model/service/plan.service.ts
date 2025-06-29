import { API } from "@/shared/api";
import type { PlanCreateRequest, PlanCreateResponse, Plan, PlanList } from "../..";

export const PlanApi = API.injectEndpoints({
  endpoints: (builder) => ({
    getPlan: builder.query<Plan[], void>({
      query: () => ({
        url: "Plan/list",
        method: "GET",
      }),
    }),
    getPlanList: builder.query<PlanList[], void>({
      query: () => ({
        url: "Plan/list",
        method: "GET",
      }),
    }),
    createPlan: builder.mutation<PlanCreateResponse, PlanCreateRequest>({
      query: () => ({
        url: "Plan",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetPlanQuery,
  useGetPlanListQuery,
  useCreatePlanMutation,
} = PlanApi;
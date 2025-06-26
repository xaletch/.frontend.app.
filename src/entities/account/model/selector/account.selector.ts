import type { RootState } from "@/app/providers/redux-provider/conf";

export const accountSelector = (state: RootState) => state.account;
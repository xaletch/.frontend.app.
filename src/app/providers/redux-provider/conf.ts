import { configureStore } from "@reduxjs/toolkit";
import { API } from "@/shared/api";
import { accountSlice } from "@/entities/account";

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,

    // ...
    account: accountSlice,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([API.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Account } from "../types/account.type";

interface AccountState {
  account: Account | undefined;
}

const initialState: AccountState = {
  account: undefined,
}

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<Account>) => {
      state.account = action.payload;
    },
  },
});

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;
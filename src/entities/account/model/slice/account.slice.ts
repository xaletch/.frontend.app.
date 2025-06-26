import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAccount } from "../types/account.type";

interface AccountState {
  account: IAccount | undefined;
}

const initialState: AccountState = {
  account: undefined,
}

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<IAccount>) => {
      state.account = action.payload;
    },
  },
});

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;
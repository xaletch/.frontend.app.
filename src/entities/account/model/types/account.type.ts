import type { User } from "./user.type";

export type Accounts = {
  id: string;
  type: string;
  provider: string;
  refreshToken: string | null;
  accessToken: string | null;
  expiresAt: number;
}

export interface IAccount {
  user: User;
  isVerified: boolean;
  isTwoFactorEnabled: boolean;
  accounts: Accounts[];
}
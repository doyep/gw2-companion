import type { AccountDto } from "#shared/types/gw2";
import { gw2Fetch } from "./client";

export const getAccount = async (apiKey: string): Promise<AccountDto> =>
  gw2Fetch<AccountDto>(apiKey, "account");

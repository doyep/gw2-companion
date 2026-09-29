import type { TokenInfoDto } from "#shared/types/gw2";
import { gw2Fetch } from "./client";

export const getTokenInfo = async (apiKey: string): Promise<TokenInfoDto> =>
  gw2Fetch<TokenInfoDto>(apiKey, "tokeninfo");

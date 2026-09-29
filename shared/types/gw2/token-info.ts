export type Gw2ApiPermission =
  | "account"
  | "builds"
  | "characters"
  | "guilds"
  | "inventories"
  | "progression"
  | "pvp"
  | "tradingpost"
  | "unlocks";

export type TokenInfoDto = {
  id: string;
  name: string;
  permissions: Gw2ApiPermission[];
};

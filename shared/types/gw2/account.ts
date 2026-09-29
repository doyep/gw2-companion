export type AccountDto = {
  id: string;
  age: number;
  name: string;
  world: number;
  guilds: string[];
  guild_leader: string[];
  created: string;
  access: Gw2Access[];
  commander: boolean;
  fractal_level: number;
  daily_ap: number;
  monthly_ap: number;
  wvw_rank: number;
};

export type Gw2Access =
  | "None"
  | "PlayForFree"
  | "GuildWars2"
  | "HeartOfThorns"
  | "PathOfFire"
  | "EndOfDragons"
  | "SecretsOfTheObscure"
  | "JanthirWilds";

import type { Gw2ApiPermission } from "#shared/types/gw2";

declare module "#auth-utils" {
  interface User {
    id: string;
    name: string;
  }

  interface UserSession {
    permissions: Gw2ApiPermission[];
  }

  interface SecureSessionData {
    apiKey: string;
  }
}

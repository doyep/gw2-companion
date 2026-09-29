import { getAccount } from "../services/gw2";

export default defineEventHandler(async (event) => {
  const { secure } = await requireUserSession(event);

  try {
    return getAccount(secure?.apiKey ?? "");
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid GW2 api key", // TODO: i18n
    });
  }
});

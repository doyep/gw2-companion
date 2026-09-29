import { z } from "zod";
import { FetchError } from "ofetch";
import { getAccount, getTokenInfo } from "~~/server/services/gw2";

const loginSchema = z
  .object({
    apiKey: z.string(),
  })
  .strict();

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) =>
    loginSchema.safeParse(body),
  );
  if (!result.success) throw result.error.issues;

  const { apiKey } = result.data;

  try {
    const [tokeninfo, account] = await Promise.all([
      getTokenInfo(apiKey),
      getAccount(apiKey),
    ]);

    await replaceUserSession(event, {
      permissions: tokeninfo.permissions,
      secure: { apiKey },
      user: {
        id: account.id,
        name: account.name,
      },
    });
  } catch (error) {
    handleLoginErrors(error);
  }
});

function handleLoginErrors(error: unknown) {
  if (!(error instanceof FetchError)) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error", // TODO: i18n
    });
  }

  if (error.statusCode === 401) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid GW2 api key", // TODO: i18n
    });
  }

  throw createError({
    statusCode: 500,
    statusMessage: "GW2 server error", // TODO: i18n
  });
}

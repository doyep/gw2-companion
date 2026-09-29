interface Gw2FetchOptions {
  method?: "GET";
  query?: Record<string, unknown>;
}

export const gw2Fetch = async <T>(
  apiKey: string,
  path: string,
  options?: Gw2FetchOptions,
) => {
  const runtimeConfig = useRuntimeConfig();

  return await $fetch<T>(path, {
    ...options,
    baseURL: runtimeConfig.gw2ApiBaseUrl,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
};

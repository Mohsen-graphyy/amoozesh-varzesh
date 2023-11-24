export const useApi = (url, method = "get", options = {}) => {
  const config = useRuntimeConfig();
  return $fetch(url, {
    method,
    baseURL: config.public.baseUrl,
    retry: 3,
    retryDelay: 500,
    timeout: 13000,
    credentials: "omit",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
      "Content-type": "application/json; multipart/form-data",
    },
    retryStatusCodes: [
      401, 408, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511,
    ],
    onRequest({ options }) {
      const tokenCookie = useCookie("token");
      if (tokenCookie.value) {
        options.headers = options.headers || {};
        options.headers.authorization = `Bearer ${tokenCookie.value}`;
      }
    },
    async onResponseError({ response, request, options }) {
      if (response.status === 401) {
        const refreshTokenCookie = useCookie("refresh_token");
        // there is no valid refresh token
        if (!refreshTokenCookie.value) navigateTo({ name: "login" });
        else {
          const tokenData = await $fetch(serviceAuth.getRefreshToken, "post", {
            body: {
              refresh_token: refreshTokenCookie.value,
            },
            onResponseError() {
              navigateTo({ name: "login" });
            },
          });
          const token = useCookie("token", {
            maxAge: 5 * 60,
            path: "/",
          });
          token.value = tokenData.value.access_token;
          options.headers.authorization = `Bearer ${token.value}`;
        }
      }
    },
    ...options,
  });
};

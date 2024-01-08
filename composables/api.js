import { useToast } from "vue-toastification";

export const useApi = async (url, method = "GET", apiOptions = {}) => {
  const config = useRuntimeConfig();
  const $toast = useToast();
  const { value: tokenValue } = useCookie("token");
  console.log("tst");
  delete apiOptions.headers?.Authorization;

  apiOptions.headers = {
    ...(tokenValue ? { Authorization: `Bearer ${tokenValue}` } : {}),
    ...(apiOptions.headers ? apiOptions.headers : {}),
  };

  let isRefreshing = false;
  let retryAttempt = 0;
  await nextTick();
  return useFetch(url, {
    method,
    baseURL: config.public.baseUrl,
    retry: 3,
    timeout: 13000,
    retryStatusCodes: [
      408, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511,
    ],
    async onResponseError({ response, options }) {
      if (options.retryStatusCodes.includes(response.status)) retryAttempt++;
      // token expires
      if (response.status === 401) {
        const refreshTokenCookie = useCookie("refresh_token");
        // there is no valid refresh token
        if (!refreshTokenCookie.value) navigateTo("login");
        else {
          // there is no new refresh token call active
          if (!isRefreshing) {
            isRefreshing = true;
            try {
              const tokenData = await $fetch(
                `${config.public.baseUrl}${serviceAuth.getRefreshToken}`,
                {
                  method: "POST",
                  body: {
                    refresh_token: refreshTokenCookie.value,
                  },
                  server: false,
                  onResponseError() {
                    navigateTo({ name: "login" });
                  },
                }
              );
              const newTokenCookie = useCookie("token", {
                maxAge: 5 * 60,
                path: "/",
              });
              newTokenCookie.value = tokenData.access_token;
              await nextTick();
              return useApi(url, method, apiOptions);
            } catch (e) {
              authLogin();
            } finally {
              isRefreshing = false;
            }
          } else {
            // there is a new refresh token call active so all other requests wait for the new token data
            const intervalId = setInterval(() => {
              if (!isRefreshing) {
                clearInterval(intervalId);
                return useApi(url, method, apiOptions);
              }
            }, 100);
          }
        }
      }
      // else error
      $toast.error(response?._data?.detail[0]);
    },
    ...apiOptions,
  });
};

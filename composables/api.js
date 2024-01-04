import { useToast } from "vue-toastification";
const toast = useToast();
export const useApi = (url, method = "get", options = {}) => {
  const config = useRuntimeConfig();
  return useFetch(url, {
    method,
    baseURL: config.public.baseUrl,
    retry: 3,
    retryDelay: 500,
    timeout: 13000,
    credentials: "include",
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
          const { data: tokenData, status } = await useFetch(
            serviceAuth.getRefreshToken,
            "post",
            {
              body: {
                refresh_token: refreshTokenCookie.value,
              },
              onResponseError() {
                navigateTo({ name: "login" });
              },
            }
          );
          if (status.value === "success") {
            const token = useCookie("token", {
              maxAge: 5 * 60,
              path: "/",
            });
            token.value = tokenData.value.access_token;
            options.headers.authorization = `Bearer ${token.value}`;
          }
        }
      }
      toast.error(response?._data?.detail[0]);
    },
    ...options,
  });
};

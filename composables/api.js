export const useApi = (url, method = "get", options = {}) => {
  const config = useRuntimeConfig();
  return $fetch(url, {
    method,
    baseURL: `${config.public.baseUrl}${config.public.baseApiUrl}`,
    retry: 3,
    retryDelay: 500,
    timeout: 13000,
    // credentials: "include",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
      "Content-type": "application/json; multipart/form-data",
    },
    retryStatusCodes: [
      401, 408, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511,
    ],
    onRequest({ options }) {
      // const tokenCookie = useCookie('token')
      // if (tokenCookie.value) {
      //   options.headers = options.headers || {}
      //   options.headers.authorization = `Bearer ${tokenCookie.value}`
      // }
    },
    onResponseError({ response }) {
      const codes = {
        //Unauthorized
        401: "باید به حساب کاربری خود وارد شوید: کد ۲",
        //timeout
        408: "مدت زمان ارسال درخواست شما گذشته است، دوباره تلاش کنید: کد ۳",
        //Bad Gateway
        502: "مشکلی رخ داده: کد ۴",
        //Gateway Timeout
        504: "مشکلی رخ داده: کد ۵",
        // Method Not Allowed
        405: "مشکلی رخ داده: کد ۶",
        // Payload Too Large rrequestesponse
        413: "مشکلی رخ داده: کد 7",
        // Authentication Error
        403: "مشکلی رخ داده: کد 8",
      };
      // token expires
      //   if (response.status === 401) {
      //     const refreshTokenCookie = useCookie("refresh_token");
      //     // there is no valid refresh token
      //   } else if (codes[response.status]) $toast.error(codes[response.status]);
      //   else if (response.statusText === "ECONNABORTED") $toast.error(codes[408]);
      //   else $toast.error("مشکلی رخ داده است");
    },
    ...options,
  });
};

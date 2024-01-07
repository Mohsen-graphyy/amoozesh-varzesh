export const isLogin = computed(() => {
  const token = useCookie("token");
  return !!token.value;
});
export const tokenInit = async () => {
  const refreshTokenCookie = useCookie("refresh_token");
  const token = useCookie("token");
  const config = useRuntimeConfig();
  if (refreshTokenCookie.value && token.value === undefined) {
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
    const token = useCookie("token", {
      maxAge: 5 * 60,
      path: "/",
    });
    token.value = tokenData.access_token;
    return tokenData.access_token;
  }
};

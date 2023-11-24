export const isLogin = computed(() => {
  const token = useCookie("token");
  return !!token.value;
});
export const tokenInit = async () => {
  const refreshTokenCookie = useCookie("refresh_token");
  if (refreshTokenCookie.value) {
    const tokenData = await useApi(serviceAuth.getRefreshToken, "POST", {
      body: {
        refresh_token: refreshTokenCookie.value,
      },
    });
    const token = useCookie("token", {
      maxAge: 5 * 60,
      path: "/",
    });
    token.value = tokenData.access_token;
  }
};

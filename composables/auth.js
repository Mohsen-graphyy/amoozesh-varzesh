export const isLogin = computed(() => {
  const token = useCookie("token");
  return !!token.value;
});
export const tokenInit = async () => {
  const refreshTokenCookie = useCookie("refresh_token");
  const token = useCookie("token");
  if (refreshTokenCookie.value && token.value === undefined) {
    const tokenData = await $fetch(
      "http://localhost:8000/" + serviceAuth.getRefreshToken,
      "POST",
      {
        body: {
          refresh_token: refreshTokenCookie.value,
        },
        server: false,
      }
    );
    console.log(tokenData.value);
    const token = useCookie("token", {
      maxAge: 5 * 60,
      path: "/",
    });
    token.value = tokenData.access_token;
  }
};

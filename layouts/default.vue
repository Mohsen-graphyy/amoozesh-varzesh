<template>
  <div class="bg-gray-100 header">
    <header-container />
    <slot></slot>
    <mobile-menu-box />
    <base-footer />
  </div>
</template>
<script setup>
const tokenInit = async () => {
  const refreshTokenCookie = useCookie("refresh_token");
  const tokenData = await useApi(serviceAuth.getRefreshToken, "POST", {
    body: {
      refresh_token: refreshTokenCookie.value,
    },
  });
  // const token = useCookie("token", {
  //   maxAge: 20,
  //   path: "/",
  // });
  // token.value = tokenData.access_token;
};
tokenInit();
</script>
<style>
.header {
  /* 587 */
  padding: 0 calc(50% - 800px);
}
</style>

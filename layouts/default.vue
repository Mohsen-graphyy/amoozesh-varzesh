<template>
  <div class="bg-gray-100 header">
    <base-loader :is-loader="isLoader" />

    <header-container />
    <slot></slot>
    <mobile-menu-box />
    <base-footer />
  </div>
</template>
<script setup>
// const tokenInit = async () => {
//   const refreshTokenCookie = useCookie("refresh_token");
//   const token = useCookie("token");
//   if (refreshTokenCookie.value && token.value === undefined) {
//     const { data: tokenData } = await useApi(
//       serviceAuth.getRefreshToken,
//       "POST",
//       {
//         body: {
//           refresh_token: refreshTokenCookie.value,
//         },
//         server: false,
//       }
//     );
//     console.log(tokenData.value);
//     const token = useCookie("token", {
//       maxAge: 5 * 60,
//       path: "/",
//     });
//     token.value = tokenData.access_token;
//   }
// };
tokenInit();
</script>
<style>
.header {
  /* 587 */
  padding: 0 calc(50% - 800px);
}
</style>

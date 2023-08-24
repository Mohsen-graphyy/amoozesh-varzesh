<template>
  <div class="bg-gray-100">
    <header-container />
    <nuxt-page class="header" />
    <mobile-menu-box/>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  /* 587 */
  padding: 0 calc(50% - 640px);
}
</style>
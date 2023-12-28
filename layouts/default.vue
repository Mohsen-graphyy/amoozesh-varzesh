<template>
  <div class="bg-gray-100 header">
    <header-container />
    <slot></slot>
    <mobile-menu-box />
    <base-footer />
  </div>
</template>
<script setup>
tokenInit();
</script>
<style>
.header {
  /* 587 */
  padding: 0 calc(50% - 800px);
}
</style>

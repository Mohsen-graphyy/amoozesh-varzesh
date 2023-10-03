<template>
  <section class="flex h-screen justify-center items-center bg-beta-gray-50">
    <div class="bg-white rounded-xl p-5 auth-box-shadow">salka</div>
  </section>
</template>
<script setup>
defineOptions({
  name: "login",
});
definePageMeta({
  layout: false,
});
</script>
<style scoped>
.auth-box-shadow {
  box-shadow: 0px 0px 40px -12px rgba(71, 85, 105, 0.13);
}
</style>

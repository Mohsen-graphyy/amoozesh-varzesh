<template>
  <section class="flex h-screen justify-center items-center bg-beta-gray-50">
    <div class="relative">
      <base-icon
        class="w-20 absolute -top-10 -z-10 -right-10"
        icon-path="Booltan"
        svg-class="w-20" />
      <div
        class="flex flex-col items-center bg-white rounded-xl p-5 auth-box-shadow">
        <div class="flex justify-center items-center">
          <base-logo title-classes=" font-bold" />
        </div>
        <nuxt-link :to="{ name: 'home' }">bro home</nuxt-link>
      </div>
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  name: "login",
  layout: false,
});
</script>
<style scoped>
.auth-box-shadow {
  box-shadow: 0px 0px 40px -12px rgba(71, 85, 105, 0.13);
}
</style>

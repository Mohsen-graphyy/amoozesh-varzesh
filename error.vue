<template>
  <div class="error-container">
    <NuxtImg
      :src="
        error.statusCode === 404
          ? '/images/error404.png'
          : '/images/error500.png'
      "
      width="610px"
      class="w-full md:w-1/3 px-5" />
    <p v-if="error.statusCode === 404">متاسفانه صفحه موردنظر یافت نشد!</p>
    <p v-else>همکاران ما، در حال بررسی مشکل می باشند.</p>
    <div class="flex items-center justify-between gap-5">
      <p
        class="px-4 py-3 rounded-lg bg-white cursor-pointer"
        @click="$router.go(-1)">
        بازگشت به صفحه قبل
      </p>
      <NuxtLink
        :to="{ name: 'home' }"
        class="bg-beta-green-100 px-4 py-3 rounded-lg text-white"
        >صفحه اصلی</NuxtLink
      >
    </div>
  </div>
</template>
<script setup>
const error = useError();
</script>
<style scoped>
.error-container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: auto 20px;
  gap: 20px;
  background-color: #f1f5f9;
}
</style>

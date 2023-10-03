<template>
  <div class="container bg-beta-green-100 text-white">
    <div class="four_zero_four_bg"></div>
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-bold container-text mt-20 md:mt-4">404</h1>
      <p>صفحه مورد نظر پیدا نشد :(</p>
      <NuxtLink
        class="mt-10 bg-white rounded-lg text-beta-green-100 p-2"
        :to="{ name: 'home' }"
        >برو به خانه</NuxtLink
      >
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
}
.container-text {
  font-size: 5rem;
}
.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 320px;
  background-position: center;
}
</style>

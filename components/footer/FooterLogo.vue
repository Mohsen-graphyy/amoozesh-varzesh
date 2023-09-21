<template>
  <div class="flex flex-col mt-10 md:flex-row md:justify-between items-center">
    <div class="md:w-1/2">
      <div class="flex items-center">
        <img src="/images/logo.svg" alt="آموزش ورزش" />
        <h1 class="font-bold mr-2">سامانه آموزش ورزش</h1>
      </div>
      <h2 class="text-sm mt-3">
        در این وبسایت ما سعی کردیم در 3 بخش معرفی دوره‌های مربیگری و سمینارها،
        زبان علوم ورزشی و لایوهای آموزشی رایگان اطلاعاتی را در اختیار دانشجویان
        تربیت‌بدنی و مربیان عزیز قرار دهیم.
      </h2>
    </div>
    <div class="flex flex-row gap-1 mt-10">
      <div
        v-for="item in 4"
        :key="item"
        class="w-14 h-14 bg-white mx-2 rounded-lg"></div>
    </div>
  </div>
</template>

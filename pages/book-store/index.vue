<template>
  <section class="!py-32 flex flex-col mx-4 md:mx-20">
    <BaseBreadCrumbs />
    <div
      class="flex flex-col lg:flex-row justify-between lg:items-center gap-10 mt-10">
      <div>
        <h1 class="font-bold">کتاب های علوم ورزشی</h1>
        <base-icon icon-path="BlueCircleDivider" />
      </div>
      <BookContainer />
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  name: "bookStore",
  breadcrumbs: "خرید کتاب",
});
useHead({
  title: "خرید کتاب",
});
const accessListItems = [
  {
    id: 1,
    iconPath: "Phone",
    title: "09369654226",
    subtitle: "پاسخگوی شما در ساعات 8 الی 17",
  },
  {
    id: 2,
    iconPath: "Instagram",
    title: "Amoozeshvarzeshcom",
    subtitle: "صفحه ما را دنبال کنید",
  },
  {
    id: 3,
    iconPath: "Mail",
    title: "info@amoozeshvarzesh.com",
    subtitle: "پست الکترونیکی ما",
  },
];
</script>

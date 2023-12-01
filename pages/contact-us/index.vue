<template>
  <section class="!py-32 flex flex-col mx-4 md:mx-20">
    <BaseBreadCrumbs />
    <div
      class="flex flex-col lg:flex-row justify-between lg:items-center gap-10 mt-10">
      <div class="flex flex-col md:basis-1/4">
        <h1 class="font-bold">راه‌های ارتباطی</h1>
        <h1 class="font-extrabold text-olied-100 text-xl">
          با سامانه آموزش ورزش
        </h1>
        <base-icon icon-path="BlueCircleDivider" />
      </div>
      <div class="md:basis-4/5 grid lg:grid-cols-3 items-center gap-4 w-full">
        <div
          v-for="accessListItem in accessListItems"
          :key="accessListItem.id"
          class="bg-white rounded-xl flex flex-col items-center p-4 w-full">
          <base-icon-box
            border-classes="border-8 border-gray-100 mb-4"
            sizing-classes="w-16 h-16 bg-olied-100"
            :icon-path="accessListItem.iconPath" />
          <h1>{{ accessListItem.title }}</h1>
          <p class="text-beta-gray-150">{{ accessListItem.subtitle }}</p>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="flex flex-col lg:flex-row justify-between gap-10 mt-10">
      <div class="flex flex-col md:basis-1/4 gap-2">
        <h1 class="font-bold">فرم تماس با ما</h1>
        <base-icon icon-path="BlueCircleDivider" />
        <p class="text-beta-gray-150">
          سلام دوست عزیز برای اینکه زودتر به نتیجه برسید بهتر است به شماره ما در
          واتساپ یا تلگرام پیام ارسال کنید. 09369654226
        </p>
      </div>
      <div class="md:basis-4/5 flex flex-col w-full bg-white rounded-lg p-4">
        <p class="font-bold">فرم زیر را پر کنید</p>
        <div
          class="flex flex-col lg:flex-row w-full lg:justify-between mt-5 gap-2">
          <BaseInput icon="Person" placeholder="نام خود را وارد کنید" />
          <BaseInput icon="Phone" placeholder="نام خود را وارد کنید" />
          <BaseInput icon="Mail" placeholder="نام خود را وارد کنید" />
        </div>
        <p class="mt-4 mb-2">توضیحات شما</p>
        <BaseInput
          type="textarea"
          placeholder="اگر در خصوص دوره‌ و ثبت نام آن مشکل دارید، لطفا عنوان دوره را در توضیحات خود ذکر کنید" />
        <BaseButton
          title="ارسال فرم"
          custom-class="bg-beta-green-100 text-white border hover:border-beta-green-100 hover:bg-white hover:text-beta-green-100 transition-all duration-300"
          class="mt-4 self-end" />
      </div>
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  name: "contactUs",
  breadcrumbs: "ارتباط با ما",
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

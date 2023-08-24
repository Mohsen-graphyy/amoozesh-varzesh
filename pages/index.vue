<template>
  <div class="bg-olied-100 !py-32">
    <div class="mx-4 md:mx-16 flex flex-col md:flex-row justify-between items-center">
      <base-paragraph class="text-white basis-1/2 mt-24" title="سامانه آموزش ورزش؛ تلفیق علم و عمل"
        content="سامانه آموزش ورزش از سال 1396 با حضور چند نفر از دانشجویان علوم ورزشی که دغدغه‌مند بودند و سعی داشتند ارزش واقعی این رشته را به دیگران نشان دهند شکل گرفت. این دوستان با استفاده از زیرساخت‌های موجود ابتدا در کانال‌های پیامرسان تلگرام سعی داشتند که دوره‌های ورزشی معتبر را به دوستان معرفی کنند." />
      <img src="/images/manExer.png" alt="آموزش ورزش" class="w-full md:w-2/5" />
    </div>
  </div>
  <base-curved />
  <div class="flex mx-4 md:mx-16 py-24 flex-col md:flex-row md:justify-between gap-4 items-center md:items-stretch">
    <access-box v-for="accessItem in accessListItem" :key="accessItem.id" :icon-path="accessItem.iconPath"
    :title="accessItem.title" />
  </div>
</template>

<script>
definePageMeta({
  name: "home",
});
export default {
  data() {
    return {
      accessListItem: [
        {
          id: 1,
          iconPath: 'Home',
          title: 'سمینارها و کارگاه ها'
        },
        {
          id: 2,
          iconPath: 'Home',
          title: 'مربیگری و داوری'
        },
        {
          id: 3,
          iconPath: 'Home',
          title: 'همایش های ورزشی'
        },
        {
          id: 4,
          iconPath: 'Home',
          title: 'دوره های آفلاین'
        },
        {
          id: 5,
          iconPath: 'Home',
          title: 'خرید کتاب'
        },
      ]
    }
  }
};
</script>

<style></style>

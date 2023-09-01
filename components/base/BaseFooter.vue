<template>
  <footer class="bg-olied-100 pt-10 text-white pb-24 md:pb-0">
    <div class="mx-4 md:mx-20 flex flex-col">
      <div
        class="grid grid-cols-2 md:flex flex-warp md:flex-row justify-between">
        <div>
          <h1 class="font-bold">دسترسی سریع</h1>
          <base-icon
            icon-path="Wave"
            svg-class="stroke-beta-green-100 w-10"
            class="" />
          <div class="grid text-sm gap-3 md:grid-cols-2">
            <p v-for="firstCol in firstCols" :key="firstCol.id">
              {{ firstCol.title }}
            </p>
          </div>
        </div>
        <div>
          <h1 class="font-bold">دسته بندی دوره ها</h1>
          <base-icon icon-path="Wave" svg-class="stroke-beta-green-100 w-10" />
          <div
            class="grid text-sm gap-3 md:grid-cols-3 gap-y-3 gap-x-12"
            :class="`md:grid-cols-${secondCols.length / 2}`">
            <p v-for="secondCol in secondCols" :key="secondCol.id">
              {{ secondCol.title }}
            </p>
          </div>
        </div>
        <div class="col-span-2">
          <h1 class="font-bold">راه ارتباطی با ما</h1>
          <base-icon
            icon-path="Wave"
            svg-class="stroke-beta-green-100 w-10"
            class="" />
          <div class="flex md:justify-between items-start">
            <div
              class="bg-olied-50 p-2 inline-flex justify-center items-center rounded-lg ml-3">
              <base-icon icon-path="Phone" svg-class="stroke-white w-6" />
            </div>
            <div>
              <p class="font-bold">
                4226 <span class="text-beta-green-100">965</span> 0936
              </p>
              <p class="text-sm">پاسخگوی شما در ساعات 8 الی 17</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:justify-between mt-10">
        <div class="flex items-center">
          <img src="/images/logo.svg" alt="آموزش ورزش" />
          <h1 class="font-bold mr-2">سامانه آموزش ورزش</h1>
        </div>
        <h2 class="text-sm mt-3">
          در این وبسایت ما سعی کردیم در 3 بخش معرفی دوره‌های مربیگری و سمینارها،
          زبان علوم ورزشی و لایوهای آموزشی رایگان اطلاعاتی را در اختیار
          دانشجویان تربیت‌بدنی و مربیان عزیز قرار دهیم.
        </h2>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      firstCols: [
        {
          id: 1,
          title: "خانه",
          link: "",
        },
        {
          id: 2,
          title: "ارتباط با ما",
          link: "",
        },
        {
          id: 3,
          title: "درباره ما",
          link: "",
        },
        {
          id: 4,
          title: "سوالات متداول",
          link: "",
        },
      ],
      secondCols: [
        {
          id: 1,
          title: "سمینارها و کارگاه ها",
          link: "",
        },
        {
          id: 2,
          title: "همایش های ورزشی",
          link: "",
        },
        {
          id: 3,
          title: "دوره های آفلاین",
          link: "",
        },
        {
          id: 4,
          title: "مربیگری و داوری",
          link: "",
        },
        {
          id: 5,
          title: "خرید کتاب",
          link: "",
        },
        {
          id: 6,
          title: "زبان علوم ورزشی",
          link: "",
        },
      ],
    };
  },
};
</script>

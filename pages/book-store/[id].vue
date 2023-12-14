<template>
  <section class="!py-32 flex flex-col mx-4 md:mx-20">
    <BaseBreadCrumbs :extra-crumbs="bookInfo.slug" />
    <div
      class="flex flex-col h-full lg:flex-row-reverse lg:items-start justify-between gap-4 mt-10">
      <div
        class="relative flex flex-col lg:basis-2/6 gap-4 bg-white p-4 rounded-lg">
        <NuxtImg
          :src="bookInfo.image"
          width="313"
          height="313"
          class="w-full h-full object-cover rounded-lg" />
        <div class="flex flex-col bg-beta-gray-50 rounded-lg px-4">
          <div
            v-for="bookContent in bookContents"
            :key="bookContent.id"
            class="flex flex-row items-center border-b border-beta-gray-100 py-4 text-sm">
            <BaseIcon
              :icon-path="bookContent.icon"
              svg-class="w-4 stroke-beta-gray-300" />
            <p class="text-beta-gray-300 mr-2">
              {{ bookContent.label }} :
              <span class="font-semibold">{{ bookContent.value }}</span>
            </p>
          </div>
          <div class="mt-10">
            <div class="flex flex-row justify-between items-center">
              <p
                class="bg-red-500 p-2 font-bold text-white rounded-lg text-center">
                10%
              </p>
              <div class="flex flex-col items-end">
                <p class="text-beta-green-100 font-semibold text-2xl">30,000</p>
                <div class="flex flex-row items-center justify-between gap-5">
                  <p class="text-beta-gray-150 line-through">35,000</p>
                  <p class="text-beta-gray-300">تومان</p>
                </div>
              </div>
            </div>
            <BaseButton
              class="my-4"
              custom-class="bg-olied-100 text-white w-full p-4 rounded-md"
              title="خرید دوره" />
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:basis-4/6 gap-6">
        <div class="flex flex-col bg-white p-4 rounded-lg gap-6">
          <div>
            <h1 class="font-bold text-xl mb-1">{{ bookInfo.title }}</h1>
            <BaseIcon icon-path="BlueCircleDivider" />
          </div>
          <div>star</div>
          <div class="flex items-center">
            <BaseIcon
              icon-path="Book"
              svg-class="stroke-beta-gray-300 w-4 h-4" />
            <p class="text-beta-gray-300">
              حوزه کتاب :
              <span class="text-olied-100 font-semibold">{{
                bookInfo.type
              }}</span>
            </p>
          </div>
          <BookItems :book-items="bookInfo.writers" title="نویسندگان" />
          <BookItems :book-items="bookInfo.bookDetails" title="محتوای کتاب" />
        </div>
        <BookDetails />
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
definePageMeta({ name: "bookSelection" });
useHead({
  title: route.params.id,
});
const bookInfo = {
  image: "/images/book1.png",
  slug: "فیزیولوژی و تغذیه ورزشی",
  title: "فیزیولوژی و تغذیه ورزشی",
  type: "آموزشی ورزشی",
  writers: [
    { id: 1, name: "محمد علی شیبک" },
    { id: 2, name: "سجاد حیدری پور" },
    { id: 3, name: "زهرا رضایی" },
    { id: 4, name: "هانیه بهروزی" },
  ],
  bookDetails: [
    { id: 1, name: "درسنامه ی جامع" },
    { id: 2, name: "پاسخ نامه ی تحلیلی و کاملاً تشریحی" },
    { id: 3, name: "نکات ویژه کنکوری" },
  ],
};
const bookContents = [
  { id: 1, icon: "Book", label: "جنس جلد", value: "مقوای نازک، 240 گرم" },
  {
    id: 2,
    icon: "Calender",
    label: "سال انتشار",
    value: "۱۳۹۷",
  },
  { id: 3, icon: "Paper", label: "تعداد صفحات", value: "۱۵۸ صفحه" },
  { id: 4, icon: "Trunk", label: "هزینه ارسال", value: "رایگان" },
];
</script>

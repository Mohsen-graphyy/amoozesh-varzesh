<template>
  <div class="flex flex-col bg-white p-4 rounded-lg">
    <div class="border border-beta-gray-50 p-4 rounded-lg">
      <button class="flex items-center gap-2">
        <BaseIcon
          icon-path="Book"
          :svg-class="
            isflag
              ? 'stroke-beta-green-100 w-4 h-4'
              : 'stroke-beta-gray-500 w-4 h-4'
          " />
        <p
          class="text-beta-gray-500"
          :class="{ 'text-beta-green-100 font-semibold': isflag }">
          توضیحات بیشتر
        </p>
      </button>
    </div>
    <div>
      <BookItems
        :book-items="setions"
        title="سرفصل های کتاب :"
        class="text-beta-gray-300 mt-5" />
      <p class="mt-5 text-beta-gray-500 font-semibold">خلاصه ای از کتاب:</p>
      <p class="text-beta-gray-300">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>
    </div>
  </div>
</template>
<script setup>
const isflag = ref(true);

const setions = [
  { id: 1, name: "درسنامه ی جامع " },
  { id: 2, name: "نكات ویژه ی کنکوری" },
  { id: 3, name: "پاسخ نامه ی تحلیلی و کاملاً تشریحی" },
];
</script>

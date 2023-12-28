<template>
  <div>
    <BookItems
      :book-items="setions"
      title="سرفصل های کتاب :"
      class="text-beta-gray-300 mt-5" />
    <p class="mt-5 text-beta-gray-500 font-semibold">خلاصه ای از کتاب:</p>
    <p class="text-beta-gray-300">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
      طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
      بهبود ابزارهای کاربردی می باشد.
    </p>
  </div>
</template>
<script setup>
const setions = [
  { id: 1, name: "درسنامه ی جامع " },
  { id: 2, name: "نكات ویژه ی کنکوری" },
  { id: 3, name: "پاسخ نامه ی تحلیلی و کاملاً تشریحی" },
];
</script>

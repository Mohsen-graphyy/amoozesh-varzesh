<template>
  <section class="!py-32 flex flex-col mx-4 md:mx-20">
    <BaseBreadCrumbs />
    <div class="flex flex-col justify-between gap-10 mt-10">
      <div>
        <h1 class="font-bold">کتاب های علوم ورزشی</h1>
        <base-icon icon-path="BlueCircleDivider" />
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 flex-warp">
        <BookContainer v-for="book in books" :key="book.id" :book="book" />
      </div>
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
const books = [
  {
    id: 1,
    image: "/images/book1.png",
    alt: "alt",
    book_slug: "کتاب استخدامی دبیری تربیت بدنی",
    title: "کتاب استخدامی دبیری تربیت بدنی",
    price: 270000,
  },
  {
    id: 2,
    image: "/images/book1.png",
    alt: "alt",
    book_slug: "فیزیولوژی و تغذیه ورزشی",
    title: "فیزیولوژی و تغذیه ورزشی",
    price: 99000,
  },
  {
    id: 3,
    image: "/images/book1.png",
    alt: "alt",
    book_slug: "کتاب تست آمار، سنجش و اندازه گیری",
    title: "کتاب تست آمار، سنجش و اندازه گیری",
    price: 199000,
  },
  {
    id: 4,
    image: "/images/book1.png",
    alt: "alt",
    book_slug: "کتاب تست آسیب شناسی ورزشی و حرکت اصلاحی",
    title: "کتاب تست آسیب شناسی ورزشی و حرکت اصلاحی",
    price: 299000,
  },
  {
    id: 5,
    image: "/images/book1.png",
    alt: "alt",
    book_slug: "کتاب بزرگ آناتومی بدنسازی بانوان",
    title: "کتاب بزرگ آناتومی بدنسازی بانوان",
    price: 179000,
  },
  {
    id: 6,
    image: "/images/book1.png",
    alt: "alt",
    book_slug: "کتاب تغذیه ورزشی ویژه کسب مدال طلا",
    title: "کتاب تغذیه ورزشی ویژه کسب مدال طلا",
    price: 259000,
  },
];
</script>

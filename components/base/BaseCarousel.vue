<template>
  <Carousel
    ref="slider"
    :items-to-show="1"
    :wrap-around="true"
    snap-align="start"
    :breakpoints="breakpoints"
    class="">
    <Slide v-for="book in books" :key="book.id">
      <BookContainer class="!h-full !w-full" :book="book" @click.stop />
    </Slide>

    <template #addons="{ slidesCount, currentSlide }">
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const slider = ref(null);
onMounted(() => {
  setTimeout(() => {
    slider.value.updateSlideWidth();
  }, 1000);
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
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
</script>
<style>
.carousel__item {
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: block;
}

.carousel__slide {
  text-align: initial;
  padding: 10px;
  width: 100%;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  border-radius: 8px;
  background-color: white;
}

.carousel__pagination-button::after {
  display: block;
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #b8c6d8;
}
.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: #36b06b;
}
</style>

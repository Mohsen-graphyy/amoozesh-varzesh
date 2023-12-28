<template>
  <nuxt-link
    :to="{
      name: 'bookSelection',
      params: { id: book.book_slug },
    }"
    class="p-4 bg-white shadow-md rounded-xl flex flex-col justify-between gap-9">
    <div class="flex lg:flex-col items-center gap-4">
      <nuxt-img
        format="webp"
        :src="book.image"
        :alt="book.alt"
        class="w-20 h-20 lg:w-full lg:h-full object-cover rounded-lg" />

      <h2 class="font-bold">{{ book.title }}</h2>
    </div>
    <div
      class="bg-olied-50 bg-opacity-10 flex flex-row justify-between items-center rounded-lg">
      <base-button class="bg-olied-100 rounded-lg text-white" title="خرید کتاب">
      </base-button>
      <div class="flex flex-col items-end py-1 px-3">
        <p class="font-semibold text-beta-green-100">
          {{ bookPrice }}
        </p>
        <p class="text-sm text-beta-gray-300">تومان</p>
      </div>
    </div>
  </nuxt-link>
</template>
<script setup>
const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});
const bookPrice = computed(() => {
  return props.book.price.toLocaleString("en-US");
});
</script>

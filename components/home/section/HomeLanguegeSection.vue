<template>
  <div class="mx-4 md:mx-20 flex flex-col pb-20">
    <base-paragraph
      class="text-gray-700"
      paragraph-class=""
      title="زبان تخصصی علوم ورزش">
      <template #customBody>
        <div
          class="grid self-center grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 mt-4 gap-4">
          <img
            v-for="image in englishImage"
            :key="image.id"
            :src="image.path"
            alt="" />
        </div>
      </template>
    </base-paragraph>
  </div>
</template>
<script setup>
const englishImage = [
  {
    id: 1,
    path: "/images/image3.png",
  },
  {
    id: 2,
    path: "/images/image4.png",
  },
  {
    id: 3,
    path: "/images/image5.png",
  },
  {
    id: 4,
    path: "/images/image6.png",
  },
];
</script>

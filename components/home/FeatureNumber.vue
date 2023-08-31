<template>
  <div class="flex flex-col gap-2">
    <div
      class="bg-olied-100 w-12 h-12 border-4 border-beta-gray-100 rounded-full flex justify-center items-center">
      <base-icon svg-class="stroke-white w-5" :icon-path="iconPath" />
    </div>
    <p class="mr-2 text-beta-green-100 font-bold">{{ number }}+</p>
    <p class="mr-2 text-sm">{{ title }}</p>
  </div>
</template>
<script>
export default {
  props: {
    iconPath: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

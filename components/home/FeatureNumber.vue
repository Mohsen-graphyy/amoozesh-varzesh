<template>
  <div class="flex flex-col gap-2">
    <base-icon-box :icon-path="iconPath" />
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

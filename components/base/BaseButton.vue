<template>
  <div class="">
    <button v-if="!hasIcon" class="rounded-xl py-3 px-4" :class="customClass">
      {{ title }}
    </button>
    <button
      v-else
      class="rounded-xl py-3 px-4 flex items-center"
      :class="customClass">
      <base-icon :svg-class="svgClass" :icon-path="iconPath"></base-icon>
      <p class="mr-2">{{ title }}</p>
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  hasIcon: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: "",
  },
  svgClass: {
    type: String,
    default: "",
  },
  iconPath: {
    type: String,
    default: "",
  },
});
</script>

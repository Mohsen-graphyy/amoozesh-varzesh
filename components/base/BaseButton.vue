<template>
  <div class="">
    <button
      v-if="!hasIcon"
      class="rounded-xl py-3 px-4"
      :class="[
        customClass,
        { '!bg-beta-gray-150 !cursor-not-allowed': isDisable },
      ]">
      {{ title }}
    </button>
    <button
      v-else
      class="rounded-xl py-3 px-4 flex items-center"
      :class="[
        customClass,
        { '!bg-beta-gray-150 !cursor-not-allowed': isDisable },
      ]">
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
  isDisable: {
    type: Boolean,
    default: false,
  },
});
</script>

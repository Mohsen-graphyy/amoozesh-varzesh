<template>
  <div class="">
    <button
      v-if="!hasIcon"
      class="rounded-xl py-3 px-4"
      :class="[
        customClass,
        { '!bg-beta-gray-150 !cursor-not-allowed': isDisable },
        { 'flex items-center gap-4 justify-between': isLoader },
      ]">
      {{ title }}
      <base-inside-loader v-if="isLoader" class="mx-2" />
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
  isLoader: {
    type: Boolean,
    default: false,
  },
});
</script>

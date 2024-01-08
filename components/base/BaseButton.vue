<template>
  <div class="">
    <div v-if="!isLoader">
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
    <div
      v-else
      class="flex justify-center items-center p-1 mx-10"
      :class="customClass">
      <base-inside-loader class="my-4" />
    </div>
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

<template>
  <div class="flex flex-col">
    <slot name="subtitle"></slot>
    <h1 class="font-bold text-2xl">{{ title }}</h1>
    <base-icon icon-path="CircleDivider" />
    <p
      v-if="content"
      class="font-thin mt-4 text-sm leading-6"
      :class="paragraphClass">
      {{ content }}
    </p>
    <slot name="customBody" class="mt-4"></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
  paragraphClass: {
    type: String,
    default: "",
  },
});
</script>

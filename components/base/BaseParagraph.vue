<template>
  <div class="flex flex-col">
    <h1 class="font-bold text-2xl">{{ title }}</h1>
    <slot name="subtitle"></slot>
    <base-icon icon-path="CircleDivider" />
    <p class="font-thin mt-4 text-sm leading-6">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
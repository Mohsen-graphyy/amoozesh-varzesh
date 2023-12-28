<template>
  <div class="bg-white rounded-xl p-4 flex flex-col">
    <div>
      <h1 class="font-bold text-xl mb-1">{{ title }}</h1>
      <BaseIcon icon-path="BlueCircleDivider" />
    </div>
    <slot name="body"></slot>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

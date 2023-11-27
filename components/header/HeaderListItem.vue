<template>
  <NuxtLink
    :to="{ name: link }"
    class="font-thin hover:text-beta-green-100"
    :class="{ '!text-beta-green-100 !font-bold': $route.name === link }"
    >{{ title }}</NuxtLink
  >
</template>

<script setup>
defineProps({
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

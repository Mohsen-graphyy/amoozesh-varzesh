<template>
  <NuxtLink :to="{ name: link }" class="font-thin hover:text-beta-green-100">{{
    title
  }}</NuxtLink>
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

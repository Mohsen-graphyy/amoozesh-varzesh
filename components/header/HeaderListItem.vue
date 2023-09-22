<template>
  <NuxtLink :to="{ name: link }" class="font-thin hover:text-beta-green-100">{{
    title
  }}</NuxtLink>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <img src="/images/logo.svg" alt="آموزش ورزش" />
  <h1 class="text-beta-green-100 mr-3" :class="titleClasses">
    سامانه آموزش ورزش
  </h1>
</template>
<script setup>
defineProps({
  titleClasses: {
    type: String,
    default: "font-extrabold text-sm",
  },
});
</script>

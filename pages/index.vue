<template>
  <main>
    <home-hero-section />
    <home-access-box-section />
    <home-course-describe />
    <home-languege-section />
    <home-live-section />
    <home-perpuse-section />
    <home-activition-section />
  </main>
</template>

<script setup>
definePageMeta({
  name: "home",
});
const kir = ref("");
async function getCourse() {
  const kiiir = await $fetch("https://random-data-api.com/api/v2/users");
  kir.value = kiiir;
  console.log(kir.value);
}
getCourse();
</script>

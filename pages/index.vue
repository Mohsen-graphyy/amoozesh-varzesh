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
import { useToast } from "vue-toastification";
const toast = useToast();
const kir = ref("");
async function getCourse() {
  const kiiir = await $fetch("https://random-data-api.com/api/v2/users");
  kir.value = kiiir;
  console.log(kir.value);
  const test = await useApi("/users");
  console.log(test);
  toast.success("من محسن هستم");
}
getCourse();
</script>

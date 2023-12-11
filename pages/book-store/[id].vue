<template>
  <section class="!py-32 flex flex-col mx-4 md:mx-20">
    <BaseBreadCrumbs :extra-crumbs="$route.params.id" />
    <div
      class="flex flex-col lg:flex-row justify-between lg:items-center gap-10 mt-10"></div>
  </section>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
definePageMeta({ name: "bookSelection" });
useHead({
  title: route.params.id,
});

console.log(route);
</script>

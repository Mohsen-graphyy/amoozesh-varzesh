<template>
  <div class="overflow-x-auto relative whitespace-nowrap">
    <ul class="flex flex-row items-center w-full h-20 md:h-auto">
      <li class="inline-flex items-center">
        <BaseIcon
          icon-path="Home"
          svg-class="w-4"
          class="stroke-beta-green-100 ml-2" />
        <nuxt-link :to="{ name: 'home' }" class="text-beta-gray-150"
          >صفحه اصلی</nuxt-link
        >
      </li>
      <li
        v-for="(crumb, index) in crumbsRoute"
        :key="crumb.name"
        class="inline-flex items-center gap-2">
        <base-icon
          icon-path="Arrow"
          svg-class="w-4"
          class="stroke-beta-gray-100"></base-icon>
        <nuxt-link
          :to="{ name: crumb.name }"
          class="text-beta-gray-150"
          :class="{ 'text-beta-gray-500': index === crumbsRoute.length - 1 }"
          >{{
            crumb.meta.breadcrumbs ? crumb.meta.breadcrumbs : extraCrumbs
          }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
defineProps({
  extraCrumbs: {
    type: String,
    default: "",
  },
});
const crumbsRoute = computed(() => {
  let fullPath = "";
  const routes = route.fullPath.substring(1).split("/");
  return routes
    .map((route) => {
      if (route) {
        fullPath = `${fullPath}/${route}`;
        const resolvedRoute = router.resolve(fullPath);
        if (resolvedRoute.name !== undefined) {
          return router.resolve(fullPath);
        }
      }
    })
    .filter(Boolean);
});
</script>

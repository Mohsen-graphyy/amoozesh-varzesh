<template>
  <div class="flex flex-row-reverse w-max gap-1 items-center">
    <BaseIcon
      v-for="n in quantity"
      :key="n"
      icon-path="Star"
      class="fill-yellow-500"
      :svg-class="
        n <= activeStars
          ? 'w-5 h-5  fill-yellow-400'
          : 'w-5 h-5  fill-beta-gray-100'
      " />
  </div>
</template>

<script setup>
defineOptions({ name: "CourseRating" });

const props = defineProps({
  rate: { type: Number, default: 0 },
  quantity: { type: Number, default: 5 },
});

const activeStars = computed(() => Math.round(props.rate));
</script>

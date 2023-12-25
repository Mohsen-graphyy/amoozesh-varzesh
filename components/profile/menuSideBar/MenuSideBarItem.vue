<template>
  <NuxtLink
    class="flex items-center justify-between"
    :to="{ name: navLinks.routes[0] }"
    @click="$emit('clicked')">
    <div class="flex items-center w-full">
      <BaseIcon
        v-if="navLinks.icon"
        class="ml-16"
        size="28px"
        :name="navLinks.icon"
        :stroke-color="checkIsActive ? 'blue' : 'grey'" />

      <span class="font-medium md:text-base">
        {{ navLinks.title }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  navLinks: {
    type: Object,
    required: true,
  },
  checkIsActive: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.link-line {
  height: 56px;
}
</style>

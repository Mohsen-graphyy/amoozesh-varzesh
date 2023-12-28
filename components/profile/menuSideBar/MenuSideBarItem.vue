<template>
  <NuxtLink
    class="flex items-center justify-between"
    :to="{ name: navLinks.routes[0] }"
    @click="$emit('clicked')">
    <div
      class="flex items-center w-full py-2 px-3 gap-3"
      :class="{ 'bg-white  rounded-xl text-beta-green-100': checkIsActive }">
      <BaseIcon
        v-if="navLinks.icon"
        :icon-path="navLinks.icon"
        :svg-class="
          checkIsActive
            ? 'w-5 h-5 stroke-beta-green-100'
            : 'w-5 h-5 stroke-white'
        " />

      <span class="font-bold md:text-base">
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

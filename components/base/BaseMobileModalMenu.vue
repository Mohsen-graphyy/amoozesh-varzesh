<template>
  <base-shadow v-if="isModalOpen" @click="$emit('outside-click')" />
  <transition name="mobile-menu-slide">
    <div
      v-if="isModalOpen"
      class="fixed w-full max-h-80 overflow-y-scroll bottom-[4.75rem] left-0 z-50">
      <slot></slot>
    </div>
  </transition>
</template>
<script setup>
defineEmits(["outside-click"]);

defineProps({
  isModalOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.mobile-menu-slide-enter-active,
.mobile-menu-slide-leave-active {
  transition: transform 0.3s ease-out;
}
.mobile-menu-slide-enter-from {
  transform: translateY(100%);
}
.mobile-menu-slide-enter-to {
  transform: translateY(0);
}
.mobile-menu-slide-leave-active {
  transition: transform 0.3s ease-in;
}
.mobile-menu-slide-leave-from {
  transform: translateY(0);
}
.mobile-menu-slide-leave-to {
  transform: translateY(100%);
}
</style>

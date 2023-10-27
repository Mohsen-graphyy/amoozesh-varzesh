<template>
  <transition name="fade">
    <div v-if="isShow" class="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  isShow: {
    type: Boolean,
    default: true,
  },
});
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

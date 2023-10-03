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
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-to,
.fade-leave {
  opacity: 0.8;
  overflow: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  overflow: hidden;
}
.fader-enter-active {
  transition: opacity 0.8s ease;
}

.fader-leave-active {
  transition: opacity 0.1s ease-out;
}

.fader-enter-to,
.fader-leave {
  opacity: 0.8;
  overflow: hidden;
}

.fader-enter,
.fader-leave-to {
  opacity: 0;
  overflow: hidden;
}
</style>

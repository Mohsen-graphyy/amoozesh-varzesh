<template>
  <div
    v-if="isLoader"
    class="w-full h-screen flex justify-center absolute top-0 left-0 items-center">
    <BaseShadow :is-show="isLoader" class="z-[999]" />
    <Transition name="fade">
      <div v-if="isLoader" class="fixed w-full min-h-screen z-[9999]">
        <div class="flex justify-center items-center min-h-screen">
          <div class="bars"></div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
defineProps({
  isLoader: {
    type: Boolean,
    required: true,
  },
});
</script>
<style>
.bars {
  width: 79.2px;
  height: 79.2px;
  --c: linear-gradient(#f4f4f4 0 0);
  background: var(--c), var(--c), var(--c);
  background-repeat: no-repeat;
  animation:
    bars-gm67sphg 1s infinite,
    bars-lof3c3hg 1s infinite;
}

@keyframes bars-gm67sphg {
  0%,
  100% {
    background-size: 15.8px 100%;
  }

  33%,
  66% {
    background-size: 15.8px 40%;
  }
}

@keyframes bars-lof3c3hg {
  0%,
  33% {
    background-position:
      0 0,
      50% 100%,
      100% 0;
  }

  66%,
  100% {
    background-position:
      0 100%,
      50% 0,
      100% 100%;
  }
}
</style>

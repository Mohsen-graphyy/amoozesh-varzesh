<template>
  <div class="">
    <button v-if="!hasIcon" class="rounded-xl py-3 px-4" :class="customClass">
      {{ title }}
    </button>
    <div v-else class="rounded-xl py-3 px-4">
      <button :class="customClass">
        {{ title }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="shape" :class="`before:${backgroundColor}`"></div>
</template>
<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "bg-olied-100",
    },
  },
};
</script>
<style scoped>
.shape {
  position: relative;
  top: -10px;
  overflow: hidden;
  height: 80px;
}

.shape::before {
  border-radius: 100%;
  position: absolute;
  right: -200px;
  left: -200px;
  top: -200px;
  content: "";
  bottom: 0;
}
</style>

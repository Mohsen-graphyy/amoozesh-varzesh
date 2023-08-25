<template>
  <div class="shape"></div>
</template>
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

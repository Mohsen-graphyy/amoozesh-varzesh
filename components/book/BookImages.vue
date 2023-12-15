<template>
  <div class="flex flex-row lg:grid lg:grid-cols-4 gap-4 py-6 overflow-x-auto">
    <NuxtImg
      v-for="count in 8"
      :key="count"
      src="/images/book1.png"
      width="183"
      height="183"
      class="rounded-lg" />
  </div>
</template>

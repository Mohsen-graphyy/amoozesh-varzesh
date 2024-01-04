<template>
  <div
    class="sticky top-10 bg-olied-100 rounded-xl p-4 flex flex-col text-white">
    <div class="flex items-center gap-4">
      <NuxtImg
        src="/images/abaas-alidoost.png"
        class="w-20 h-20 object-cover rounded-full border-8 border-solid border-olied-50" />
      <div>
        <p class="font-bold">محسن پیری</p>
      </div>
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <div v-for="item in dashboard" :key="item.id">
        <MenuSideBarContainer :nav-links="item" @clicked="$emit('clicked')" />
      </div>
    </div>
  </div>
</template>
<script setup>
defineEmits(["clicked"]);
</script>

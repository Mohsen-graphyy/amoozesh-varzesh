<template>
  <base-mobile-modal-menu
    :is-modal-open="isModalOpen"
    @outside-click="$emit('close')">
    <div class="bg-white mx-6 rounded-t-lg p-4 flex flex-col">
      shop
      <header-list-item
        v-for="headerItem in menuItems"
        :key="headerItem.id"
        class="mb-3 text-gray-500"
        :link="headerItem.link"
        :title="headerItem.title" />
    </div>
  </base-mobile-modal-menu>
</template>
<script setup>
defineEmits(["close"]);
defineProps({
  isModalOpen: {
    type: Boolean,
    required: true,
  },
});
</script>

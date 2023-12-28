<template>
  <base-mobile-modal-menu
    :is-modal-open="isModalOpen"
    @outside-click="$emit('close')">
    <div class="mx-6 !rounded-t-xl">
      <ProfileLayoutMenuSideBar @clicked="$emit('close')" />
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

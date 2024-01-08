<template>
  <BaseModal
    box-classes="text-center"
    :disable-teleport="disableTeleport"
    :isModalOpen="isShowConfirmModal"
    @close-modal="$emit('close')">
    <template v-slot:title>
      <slot name="title">
        <p>آیا از انجام این کار اطمینان دارید ؟</p>
      </slot>
    </template>
    <template v-slot:bodyContent>
      <div class="flex flex-row justify-between mt-10 gap-4">
        <BaseButton
          class="w-full"
          title="بله"
          custom-class="border border-solid border-olied-50 text-olied-50 hover:bg-olied-50 hover:text-white  transition duration-150 w-full"
          @click="$emit('confirm')" />
        <BaseButton
          class="w-full"
          title="خیر"
          custom-class="border border-solid border-red-500 text-red-500 hover:bg-red-500 hover:text-white  transition duration-150 w-full"
          @click="$emit('close')" />
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
defineEmits(["confirm", "close"]);
const props = defineProps({
  isShowConfirmModal: {
    type: Boolean,
    required: true,
  },
  disableTeleport: {
    type: Boolean,
    default: true,
  },
});
</script>

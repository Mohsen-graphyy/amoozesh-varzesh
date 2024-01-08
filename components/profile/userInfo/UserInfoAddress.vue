<template>
  <ProfileMainContainer title="آدرس‌های پیشین">
    <template #body>
      <div class="flex flex-col mt-5 gap-4">
        <BaseButton
          class="self-end"
          has-icon
          icon-path="Plus"
          title="افزودن"
          svg-class="w-5 h-5 stroke-beta-green-100"
          custom-class="border border-beta-green-100 transition duration-150 rounded-xl w-fit !p-2 hover:bg-beta-green-100 hover:bg-opacity-20"
          @click="isShowCropper = true" />
        <div
          v-for="address in addresses"
          :key="address.postcode"
          class="drop-shadow-lg bg-white py-4 px-3 w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center rounded-xl">
          <p class="text-beta-gray-500 md:basis-2/3">
            {{ address.address }}
          </p>
          <button class="text-beta-gray-150 text-sm text-left">حذف آدرس</button>
        </div>
      </div>
    </template>
  </ProfileMainContainer>
  <BaseConfirmModal
    :is-show-confirm-modal="isShowCropper"
    @close="closeModal"
    @confirm="closeModal" />
</template>
<script setup>
const props = defineProps({
  addresses: {
    type: Array,
    required: true,
  },
});
const isShowCropper = ref(false);
const closeModal = () => (isShowCropper.value = false);
</script>

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
          custom-class="border border-beta-green-100 transition duration-150 rounded-xl w-fit !p-2 hover:bg-beta-green-100 hover:bg-opacity-20" />
        <div
          v-for="address in addresses"
          :key="address.postcode"
          class="drop-shadow-lg bg-white py-4 px-3 w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center rounded-xl">
          <p class="text-beta-gray-500 md:basis-2/3">
            {{ address.address }}
          </p>
          <button
            class="text-red-500 text-sm text-left"
            @click="openModal(address.id)">
            حذف آدرس
          </button>
        </div>
      </div>
    </template>
  </ProfileMainContainer>
  <BaseConfirmModal
    :is-show-confirm-modal="isShowConfirmModal"
    @close="isShowConfirmModal = false"
    @confirm="deleteAdress" />
</template>
<script setup>
const emit = defineEmits(["updateAddress"]);
const props = defineProps({
  addresses: {
    type: Array,
    required: true,
  },
});
const selectedAddress = ref(null);
const openModal = (id) => {
  isShowConfirmModal.value = true;
  selectedAddress.value = id;
};
const isShowConfirmModal = ref(false);
const deleteAdress = async () => {
  startLoader();
  const { data: name, status } = await useApi(
    `${serviceProfile.deleteAddress}/1/delete-address/${selectedAddress.value}/`,
    "DELETE"
  );
  if (status.value === "success") {
    emit("updateAddress");
  }
  isShowConfirmModal.value = false;
  stopLoader();
};
</script>

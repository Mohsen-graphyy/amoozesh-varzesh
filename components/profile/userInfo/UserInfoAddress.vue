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
          @click="isShowAddModal = true" />
        <div v-if="addresses.length" class="flex flex-col gap-3">
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
        <div
          v-else
          class="bg-beta-gray-50 p-3 text-sm rounded-md border border-dashed border-beta-gray-100">
          تا به حال آدرسی ثبت نکردید :(
        </div>
      </div>
    </template>
  </ProfileMainContainer>
  <BaseConfirmModal
    :disable-teleport="false"
    :is-show-confirm-modal="isShowConfirmModal"
    @close="isShowConfirmModal = false"
    @confirm="deleteAdress" />
  <UserInfoAddressAdd
    :is-show-modal="isShowAddModal"
    @close="isShowAddModal = false" />
</template>
<script setup>
const emit = defineEmits(["updateAddress"]);
const props = defineProps({
  addresses: {
    type: Array,
    default: () => [],
  },
});
const selectedAddress = ref(null);
const isShowConfirmModal = ref(false);
const isShowAddModal = ref(false);

const openModal = (id) => {
  isShowConfirmModal.value = true;
  selectedAddress.value = id;
};
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

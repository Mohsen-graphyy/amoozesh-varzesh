<template>
  <BaseModal
    box-classes="text-center"
    closeable
    isCloseRight
    :isModalOpen="isShowModal"
    @close-modal="$emit('close')">
    <template v-slot:title>
      <p>افزودن آدرس جدید</p>
    </template>
    <template v-slot:bodyContent>
      <div class="flex flex-col gap-4 mt-8 text-right">
        <BaseInput
          id="address"
          placeholder="آدرس جدید را وارد کنید"
          icon="Location"
          :is-lazy-validation="false"
          :rules="[ruleNotEmpty]"
          v-model="state.address" />
        <BaseInput
          id="postcode"
          placeholder="کدپستی را وارد کنید"
          icon="Home"
          :is-lazy-validation="false"
          :rules="[ruleNotEmpty]"
          v-model="state.postcode" />
        <BaseButton
          title="ثبت آدرس جدید"
          custom-class="transition duration-150 hover:bg-olied-100 bg-olied-50 w-full text-white" />
      </div>
    </template>
  </BaseModal>
</template>
<script setup>
const props = defineProps({
  addresses: {
    type: Array,
    required: true,
  },
  isShowModal: {
    type: Boolean,
    required: true,
  },
});
const state = ref({
  address: null,
  postcode: null,
});
</script>

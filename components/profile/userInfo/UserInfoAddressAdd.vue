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
      <div class="flex flex-col gap-4">
        <BaseInput
          id="address"
          placeholder="آدرس جدید را وارد کنید"
          icon="Person"
          :is-lazy-validation="false"
          :rules="[ruleNotEmpty]"
          v-model="state.address" />
        <BaseInput
          id="postcode"
          placeholder="آدرس جدید را وارد کنید"
          icon="Person"
          :is-lazy-validation="false"
          :rules="[ruleNotEmpty]"
          v-model="state.postcode" />
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

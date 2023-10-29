<template>
  <div>
    <p class="mt-6">ثبت نام در سایت</p>
    <base-icon icon-path="BlueCircleDivider" svg-class="mt-2 mb-5" />
    <div class="flex flex-col gap-4">
      <base-input
        id="username"
        placeholder="شماره خود را وارد کنید"
        icon="Mobile"
        :rules="[rulePhoneNumber, ruleNotEmpty]"
        :is-lazy-validation="false"
        v-model="username"
        @validition-state="isValid = $event" />
    </div>

    <div class="flex flex-row gap-4 justify-between items-center mt-16">
      <base-button
        class="w-full"
        title="دریافت کد تایید"
        custom-class="bg-olied-50 text-white w-full !text-sm !p-3"
        :is-disable="!isValid"
        @click="getConfirmCode" />
      <base-button
        class="w-full"
        title="ورود به سایت"
        custom-class="border border-solid text-beta-gray-300 w-full !text-sm"
        @click="$emit('clicked', 'AuthLogin')" />
    </div>
  </div>
</template>
<script setup>
import { useGenralStore } from "~/stores/general";
const emit = defineEmits(["clicked"]);
const store = useGenralStore();

const username = ref("");
const isValid = ref(false);
const getConfirmCode = () => {
  if (isValid.value) {
    // store.setUsername(username.value);
    store.setUsername(username.value);
    emit("clicked", "AuthOtp");
  } else return;
};
</script>

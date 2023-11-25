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
import { useToast } from "vue-toastification";
const toast = useToast();
const emit = defineEmits(["clicked"]);

const username = ref("");
const isValid = ref(false);
const getConfirmCode = async () => {
  if (isValid.value) {
    try {
      await useApi(serviceAuth.registerUser, "post", {
        body: {
          phone_number: username.value,
        },
        onResponseError({ response }) {
          toast.error(response._data.detail[0]);
        },
      });
      emit("clicked", "AuthOtp");
    } catch (e) {
      console.log(e);
    }
  } else return;
};
</script>

<template>
  <div>
    <p class="mt-6">
      {{ isRestPassword ? "تغییر رمز عبور" : " تعیین رمز عبور" }}
    </p>
    <base-icon icon-path="BlueCircleDivider" svg-class="mt-2 mb-5" />
    <div class="flex flex-col gap-4">
      <base-password id="password" placeholder="رمز عبور" v-model="password" />
      <base-password
        id="confirm-password"
        placeholder="تکرار رمز عبور"
        v-model="confirmPassword" />
    </div>

    <div class="flex flex-row gap-4 justify-between items-center mt-16">
      <base-button
        class="w-full"
        :title="isRestPassword ? 'تایید' : 'تکمیل ثبت نام'"
        custom-class="bg-olied-50 text-white w-full !text-sm !p-3"
        :is-disable="!password || !confirmPassword"
        @click="createPassword" />
    </div>
  </div>
</template>
<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  isRestPassword: {
    type: Boolean,
    default: false,
  },
});
const password = ref("");
const confirmPassword = ref("");

const createPassword = async () => {
  if (
    password.value &&
    confirmPassword.value &&
    password.value === confirmPassword.value
  ) {
    const { status } = await useApi(
      props.isRestPassword
        ? serviceAuth.setResetPassword
        : serviceAuth.setPassword,
      "POST",
      {
        body: {
          password: password.value,
          password_confirm: confirmPassword.value,
        },
      }
    );
    if (status.value === "success") {
      toast.success("ثبت نام با موفقیت انجام شد.");
      navigateTo({ name: "login" });
    } else {
      emit("update:modelValue", "register");
    }
  } else return;
};
</script>

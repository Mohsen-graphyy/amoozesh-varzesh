<template>
  <div>
    <p class="mt-6">دریافت کد تایید</p>
    <base-icon icon-path="BlueCircleDivider" svg-class="mt-2 mb-5" />
    <div>
      <p class="text-xs text-beta-gray-150">
        لطفا کد ارسال شده به شماره <span>{{ store.username }}</span> را وارد
        کنید.
      </p>

      <OtpInput
        ref="otpInput"
        input-classes="otp-input"
        class="flex flex-row-reverse justify-center gap-3 items-center mt-4"
        separator=""
        :num-inputs="6"
        :should-auto-focus="true"
        :is-input-num="true"
        @on-change="handleOnChange"
        @on-complete="handleOnComplete" />
    </div>
    <div class="flex flex-row gap-4 justify-between items-center mt-16">
      <base-button
        class="w-full"
        title="ادامه"
        custom-class="bg-olied-100 text-white w-full  !text-sm !p-3"
        :is-disable="!isValid"
        @click="$emit('clicked', 'AuthSetPassword')" />
      <base-button
        class="w-full"
        :title="`${
          secondsLeftToResend !== 0 ? `${minutes}:${seconds}` : 'درخواست مجدد'
        }`"
        custom-class="border border-solid text-beta-gray-300 w-full  !text-sm !p-3"
        @click="resendCode" />
    </div>
  </div>
</template>

<script setup>
import OtpInput from "vue3-otp-input";

const emit = defineEmits(["clicked"]);
const store = useGenralStore();

const otpInput = ref(null);
const isValid = ref(false);
let intervalId = setInterval(timer, 1000);

const handleOnComplete = (value) => {
  store.setOtpCode(value);
  isValid.value = true;
};
const handleOnChange = (value) => {
  isValid.value = false;
};
const secondsLeftToResend = ref(2 * 60);
const minutes = computed(() => {
  return `${Math.floor(secondsLeftToResend.value / 60)}`.padStart(2, "0");
});
const seconds = computed(() => {
  return `${secondsLeftToResend.value % 60}`.padStart(2, "0");
});
const resendCode = () => {
  if (secondsLeftToResend.value === 0) {
    emit("clicked", "AuthSignUp");
  }
};
function timer() {
  secondsLeftToResend.value--;
  if (secondsLeftToResend.value === 0) clearInterval(intervalId);
}
</script>
<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid #b8c6d8;
  text-align: center;
  box-shadow: 0px 0px 50px -10px rgba(71, 85, 105, 0.4);
}
</style>

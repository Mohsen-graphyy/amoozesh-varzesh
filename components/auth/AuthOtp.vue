<template>
  <div>
    <p class="mt-6">دریافت کد تایید</p>
    <base-icon icon-path="BlueCircleDivider" svg-class="mt-2 mb-5" />
    <div>
      <p class="text-xs text-beta-gray-150">
        لطفا کد ارسال شده به شماره <span>09160000000</span> را وارد کنید.
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
        :custom-class="{ '!bg-beta-gray-300': !username && !password }" />
      <base-button
        class="w-full"
        :title="`${minutes}:${seconds}`"
        custom-class="border border-solid text-beta-gray-300 w-full  !text-sm !p-3"
        @click="$emit('clicked', 'AuthSignUp')" />
    </div>
  </div>
</template>

<script setup>
import OtpInput from "vue3-otp-input";
const otpInput = ref(null);
const handleOnComplete = (value) => {
  console.log("OTP completed: ", value);
};
const handleOnChange = (value) => {
  console.log("OTP changed: ", value);
};
const secondsLeftToResend = ref(180);
const minutes = computed(() => {
  return `${Math.floor(secondsLeftToResend.value / 60)}`.padStart(2, "0");
});
const seconds = computed(() => {
  return `${secondsLeftToResend.value % 60}`.padStart(2, "0");
});
let intervalId = setInterval(timer, 1000);
function timer() {
  secondsLeftToResend.value--;
  if (secondsLeftToResend.value === 0) clearInterval(intervalId);
}
const clearInput = () => {
  otpInput.value.clearInput();
};
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

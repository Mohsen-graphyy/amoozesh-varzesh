<template>
  <div>
    <p class="mt-6">ورود به سایت</p>
    <base-icon icon-path="BlueCircleDivider" svg-class="mt-2 mb-5" />
    <div class="flex flex-col gap-4">
      <base-input
        id="username"
        placeholder="شماره خود را وارد کنید"
        icon="Mobile"
        :rules="[rulePhoneNumber, ruleNotEmpty]"
        v-model="username" />
      <base-password id="password" placeholder="رمز عبور" v-model="password" />
    </div>
    <div
      class="flex flex-row justify-between items-center mt-3 text-beta-gray-300 text-sm">
      <div class="flex gap-3 items-center">
        <input type="checkbox" name="remember-me" id="remember-me" />
        <span>مرا به خاطر بسپار</span>
      </div>
      <p>فراموشی رمز</p>
    </div>
    <div class="flex flex-row gap-4 justify-between items-center mt-16">
      <base-button
        class="w-full"
        title="ورود"
        custom-class="bg-olied-100 text-white w-full  !text-sm !p-3"
        :custom-class="{ '!bg-beta-gray-300': !username && !password }" />
      <base-button
        class="w-full"
        title="ثبت نام"
        custom-class="border border-solid text-beta-gray-300 w-full  !text-sm !p-3"
        @click="$emit('clicked', 'AuthSignUp')" />
    </div>
  </div>
</template>
<script setup>
const username = ref("");
const password = ref("");
</script>

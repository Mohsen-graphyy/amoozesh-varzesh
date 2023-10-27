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
        v-model="username" />
    </div>

    <div class="flex flex-row gap-4 justify-between items-center mt-16">
      <base-button
        class="w-full"
        title="دریافت کد تایید"
        custom-class="bg-olied-100 text-white w-full !text-sm !p-3"
        :custom-class="{ '!bg-beta-gray-300': !username && !password }" />
      <base-button
        class="w-full"
        title="ورود به سایت"
        custom-class="border border-solid text-beta-gray-300 w-full !text-sm"
        @click="$emit('clicked', 'AuthLogin')" />
    </div>
  </div>
</template>
<script setup>
const username = ref("");
</script>

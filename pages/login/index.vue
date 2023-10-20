<template>
  <section class="flex h-screen justify-center items-center bg-beta-gray-50">
    <div class="relative">
      <base-icon
        class="w-20 absolute -top-10 z-0 -right-10"
        icon-path="Booltan"
        svg-class="w-20" />
      <div class="flex flex-col bg-white rounded-xl p-5 auth-box-shadow">
        <div class="flex justify-center items-center">
          <base-logo title-classes=" font-bold" />
        </div>
        <p class="mt-6">ورود به سایت</p>
        <base-icon icon-path="BlueCircleDivider" class="mt-2 mb-5" />
        <div class="flex flex-col gap-4">
          <base-input
            id="username"
            placeholder="شماره خود را وارد کنید"
            icon="Mobile"
            :rules="[rulePhoneNumber, ruleNotEmpty]"
            v-model="kir" />
          <base-password
            id="password"
            placeholder="رمز عبور"
            v-model="password" />
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
          <nuxt-link class="w-full" :to="{ name: 'home' }">
            <base-button
              class="w-full"
              title="ورود"
              custom-class="bg-olied-100 text-white w-full"
              :custom-class="{ '!bg-beta-gray-300': !kir && !password }" />
          </nuxt-link>
          <base-button
            class="w-full"
            title="ثبت نام"
            custom-class="border border-solid text-beta-gray-300 w-full" />
        </div>
      </div>
      <div class="flex items-center mt-3">
        <base-icon icon-path="Home" svg-class="w-6 stroke-beta-gray-300" />
        <nuxt-link :to="{ name: 'home' }" class="text-beta-gray-300 text-sm"
          >بازگشت به صفحه اصلی</nuxt-link
        >
      </div>
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  name: "login",
  layout: false,
});
const kir = ref("");
const password = ref("");
</script>
<style scoped>
.auth-box-shadow {
  box-shadow: 0px 0px 40px -12px rgba(71, 85, 105, 0.13);
}
</style>

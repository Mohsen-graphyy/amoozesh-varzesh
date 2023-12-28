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
        v-model="username"
        @validition-state="isValidUsername = $event" />
      <base-password id="password" placeholder="رمز عبور" v-model="password" />
    </div>
    <div
      class="flex flex-row justify-between items-center mt-3 text-beta-gray-300 text-sm">
      <div class="flex gap-3 items-center">
        <input type="checkbox" name="remember-me" id="remember-me" />
        <span>مرا به خاطر بسپار</span>
      </div>
      <nuxt-link :to="{ name: 'setPassword' }" class="cursor-pointer">
        فراموشی رمز
      </nuxt-link>
    </div>
    <div class="flex flex-row gap-4 justify-between items-center mt-16">
      <base-button
        class="w-full"
        title="ورود"
        custom-class="bg-olied-100 text-white w-full  !text-sm !p-3"
        :is-disable="!isValidUsername || !password"
        @click="login" />
      <nuxt-link :to="{ name: 'register' }" class="w-full">
        <base-button
          class="w-full"
          title="ثبت نام"
          custom-class="border border-solid text-beta-gray-300 !w-full !text-sm !p-3" />
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
import { useToast } from "vue-toastification";
definePageMeta({
  name: "login",
  layout: "auth",
});
const toast = useToast();

const username = ref("");
const password = ref("");
const isValidUsername = ref(false);

async function login() {
  const { data: auth, status } = await useApi(serviceAuth.login, "POST", {
    body: {
      phone_number: username.value,
      password: password.value,
    },
  });

  if (status.value === "success") {
    const refreshToken = useCookie("refresh_token", {
      maxAge: 10 * 365 * 24 * 60 * 60,
      path: "/",
    });
    const token = useCookie("token", {
      maxAge: 5 * 60,
    });
    console.log(auth.value);
    refreshToken.value = auth.value.refresh_token;
    token.value = auth.value.access_token;

    toast.success("ورود با موفقیت انجام شد");
    navigateTo({ name: "home" });
  }
}
</script>

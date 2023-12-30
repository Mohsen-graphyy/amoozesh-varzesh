<template>
  <section class="flex h-screen justify-center items-center bg-beta-gray-50">
    <base-loader :is-loader="isLoader" />
    <div class="relative">
      <base-icon
        class="w-20 absolute -top-10 z-0 -right-10 hidden md:visible"
        icon-path="Booltan"
        svg-class="w-20" />
      <div
        class="relative flex flex-col bg-white rounded-xl p-5 auth-box-shadow overflow-x-hidden">
        <div class="flex justify-center items-center">
          <base-logo title-classes="font-bold" />
        </div>
        <div class="flex flex-row">
          <slot></slot>
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
const currentComponent = shallowRef(null);

changeComponent("AuthLogin");

function changeComponent(nextComponent) {
  currentComponent.value = defineAsyncComponent(() =>
    import(`./../../components/auth/${nextComponent}.vue`)
  );
}
</script>

<style scoped>
.auth-box-shadow {
  box-shadow: 0px 0px 40px -12px rgba(71, 85, 105, 0.13);
}
</style>

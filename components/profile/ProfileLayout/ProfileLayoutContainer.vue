<template>
  <div class="!py-32 flex flex-col mx-4 md:mx-20">
    <BaseBreadCrumbs />
    <div class="flex mt-5 gap-5">
      <div
        class="bg-olied-100 basis-1/4 rounded-xl p-4 flex flex-col text-white">
        <div class="flex items-center gap-4">
          <NuxtImg
            src="/images/abaas-alidoost.png"
            class="w-20 h-20 object-cover rounded-full border-8 border-solid border-olied-50" />
          <div>
            <p class="font-bold">محسن پیری</p>
          </div>
        </div>
        <div class="flex flex-col gap-4 mt-4">
          <div v-for="item in dashboard" :key="item.id">
            <MenuSideBarContainer :nav-links="item" />
          </div>
        </div>
      </div>
      <div class="flex flex-col basis-3/4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="p-4 bg-white rounded-xl flex flex-col gap-9">
    <div class="flex items-center gap-4">
      <nuxt-img
        format="webp"
        src="/images/manExer.png"
        alt="آموزش ورزش"
        class="w-20 h-20 object-cover rounded-lg" />
      <nuxt-link
        :to="{
          name: 'bookSelection',
          params: { id: 'کتاب استخدامی دبیری تربیت بدنی' },
        }">
        <h2 class="font-bold">کتاب استخدامی دبیری تربیت بدنی</h2>
      </nuxt-link>
    </div>
    <div
      class="bg-olied-50 bg-opacity-10 flex flex-row justify-between items-center rounded-lg">
      <base-button class="bg-olied-100 rounded-lg text-white" title="ثبت نام">
      </base-button>
      <div class="flex flex-col items-end py-1 px-3">
        <p class="font-semibold text-beta-green-100">270,000</p>
        <p class="text-sm text-beta-gray-300">تومان</p>
      </div>
    </div>
  </div>
</template>

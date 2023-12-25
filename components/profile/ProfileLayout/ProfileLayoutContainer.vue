<template>
  <div class="!py-32 flex flex-col mx-4 md:mx-20">
    <BaseBreadCrumbs />
    <div class="flex mt-5 gap-5">
      <div
        class="bg-olied-100 basis-1/4 rounded-xl p-4 flex flex-col text-white">
        lorem
      </div>
      <div class="flex flex-col basis-3/4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

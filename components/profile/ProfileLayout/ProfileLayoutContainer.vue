<template>
  <div class="!py-32 flex flex-col mx-4 md:mx-20">
    <BaseBreadCrumbs />
    <div class="flex mt-5 gap-5">
      <div class="lg:basis-1/4 hidden lg:flex w-full">
        <ProfileLayoutMenuSideBar class="w-full" />
      </div>
      <div class="flex flex-col w-full lg:basis-3/4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

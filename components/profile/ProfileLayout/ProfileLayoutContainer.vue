<template>
  <div class="!py-32 flex flex-col mx-4 md:mx-20">
    <BaseBreadCrumbs />
    <div class="flex mt-5 gap-5">
      <div
        class="bg-olied-100 basis-1/4 rounded-xl p-4 flex flex-col text-white">
        <div>loadRouteLocation,</div>
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

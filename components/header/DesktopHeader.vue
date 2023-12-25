<template>
  <div class="hidden md:flex flex-col bg-white rounded-xl p-4 md:mx-10">
    <div class="flex flex-row justify-between items-center">
      <div class="flex items-center">
        <base-logo title-classes="ml-10 font-bold" />
        <header-list-item
          v-for="headerItem in menuItems"
          :key="headerItem.id"
          class="ml-6 text-gray-500 !text-sm"
          :link="headerItem.link"
          :title="headerItem.title" />
      </div>
      <nuxt-link v-if="!isLogin" :to="{ name: 'login' }">
        <base-button
          title="ورود و عضویت"
          custom-class="bg-beta-green-100 text-white group transition duration-200 hover:bg-white border border-transparent hover:border-beta-green-100 hover:text-beta-green-100 text-sm font-normal"
          svg-class="stroke-white w-5 transition duration-200 group-hover:stroke-beta-green-100 "
          icon-path="Person"
          :has-icon="true" />
      </nuxt-link>
      <nuxt-link v-else :to="{ name: 'personalInfo' }">
        <base-button
          title="محسن پیری"
          class=""
          custom-class="bg-beta-green-100 text-white group transition duration-200 hover:bg-white border border-transparent hover:border-beta-green-100 hover:text-beta-green-100 text-sm font-normal"
          svg-class="stroke-white w-5 transition duration-200 group-hover:stroke-beta-green-100 "
          icon-path="Person"
          :has-icon="true" />
      </nuxt-link>
    </div>
  </div>
</template>

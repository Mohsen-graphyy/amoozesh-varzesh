<template>
  <div class="hidden md:flex flex-col bg-white rounded-xl p-4 md:mx-16">
    <div class="flex flex-row justify-between items-center">
      <div class="flex items-center">
        <img src="/images/logo.svg" alt="آموزش ورزش" />
        <h1 class="text-beta-green-100 font-bold mr-3 ml-10">
          سامانه آموزش ورزش
        </h1>
        <header-list-item
          v-for="headerItem in headerListItems"
          :key="headerItem.id"
          class="ml-6 text-gray-500 !text-sm"
          :link="headerItem.link"
          :title="headerItem.title"
        />
      </div>
      <base-button
        title="ورود و عضویت"
        class=""
        custom-class="bg-beta-green-100 text-white group transition duration-200 hover:bg-white border border-transparent hover:border-beta-green-100 hover:text-beta-green-100 text-sm font-normal"
        svg-class="stroke-white w-5 transition duration-200 group-hover:stroke-beta-green-100 "
        icon-path="Person"
        :has-icon="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerListItems: [
        {
          id: 1,
          link: "home",
          title: "خانه",
        },
        {
          id: 2,
          link: "home",
          title: "درباره ما",
        },
        {
          id: 3,
          link: "home",
          title: "ارتباط با ما",
        },
        {
          id: 4,
          link: "home",
          title: "سوالات متداول",
        },
      ],
    };
  },
};
</script>
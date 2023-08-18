<template>
  <div class="flex flex-col w-full bg-white rounded-xl p-4">
    <div class="flex flex-row justify-between items-center">
      <div class="flex items-center">
        <img src="/images/logo.svg" alt="آموزش ورزش" />
        <h1 class="text-beta-green-100 font-bold mr-3 ml-10">
          سامانه آموزش ورزش
        </h1>
        <header-list-item
          v-for="headerItem in headerListItems"
          :key="headerItem.id"
          class="ml-6 text-gray-500"
          :link="headerItem.link"
          :title="headerItem.title"
        />
      </div>
      <base-button
        title="ورود و عضویت"
        custom-class="bg-beta-green-100 text-white"
        class=""
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
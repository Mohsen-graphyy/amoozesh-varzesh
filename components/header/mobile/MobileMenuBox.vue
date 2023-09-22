<template>
  <div class="fixed bottom-4 w-full md:hidden z-[60]">
    <div
      class="bg-gray-100 py-3 px-4 mx-4 rounded-xl flex justify-between items-center">
      <div
        v-for="menuItem in menuListItems"
        :key="menuItem.id"
        class="bg-white p-2 rounded-lg"
        @click="isModalOpen = !isModalOpen">
        <base-icon
          svg-class="stroke-gray-700 w-5"
          :icon-path="menuItem.iconPath"></base-icon>
      </div>
    </div>
  </div>
  <menu-items-main :is-modal-open="isModalOpen" @close="isModalOpen = false" />
</template>
<script>
export default {
  data() {
    return {
      menuListItems: [
        {
          id: 1,
          iconPath: "Home",
        },
        {
          id: 2,
          iconPath: "Search",
        },
        {
          id: 3,
          iconPath: "Menu",
        },
        {
          id: 4,
          iconPath: "Shoping",
        },
        {
          id: 5,
          iconPath: "Person",
        },
      ],
      selectedItem: null,
      isModalOpen: false,
    };
  },
};
</script>

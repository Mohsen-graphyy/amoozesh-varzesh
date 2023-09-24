<template>
  <div class="fixed bottom-4 w-full md:hidden z-[60]">
    <div
      class="bg-gray-100 py-3 px-4 mx-4 rounded-xl flex justify-between items-center">
      <div
        v-for="menuItem in menuListItems"
        :key="menuItem.id"
        class="bg-white p-2 rounded-lg"
        :class="{
          'border border-beta-green-100':
            selectedItem && menuItem.id === selectedItem.id,
        }"
        @click="selectItem(menuItem)">
        <base-icon
          :svg-class="[
            selectedItem && menuItem.id === selectedItem.id
              ? 'stroke-beta-green-100 w-5'
              : 'stroke-gray-700 w-5',
          ]"
          :icon-path="menuItem.iconPath"></base-icon>
      </div>
    </div>
  </div>
  <menu-items-main
    :is-modal-open="isModalOpen('MenuItemsMain')"
    @close="closeModals" />
  <menu-items-shop
    :is-modal-open="isModalOpen('MenuItemsShop')"
    @close="closeModals" />
</template>

<script>
export default {
  data() {
    return {
      menuListItems: [
        { id: 1, iconPath: "Home", link: "home" },
        { id: 2, iconPath: "Search", modalName: "" },
        { id: 3, iconPath: "Menu", modalName: "MenuItemsMain" },
        { id: 4, iconPath: "Shoping", modalName: "MenuItemsShop" },
        { id: 5, iconPath: "Person", link: "profile" },
      ],
      selectedItem: null,
    };
  },
  methods: {
    selectItem(menuItem) {
      if (menuItem.link) {
        this.$router.push({ name: menuItem.link });
        this.closeModals();
      } else if (menuItem.modalName) {
        if (this.isModalOpen(menuItem.modalName)) {
          this.closeModals();
        } else {
          this.selectedItem = menuItem;
        }
      }
    },
    closeModals() {
      this.selectedItem = null;
    },
    isModalOpen(modalName) {
      return this.selectedItem && this.selectedItem.modalName === modalName;
    },
  },
};
</script>

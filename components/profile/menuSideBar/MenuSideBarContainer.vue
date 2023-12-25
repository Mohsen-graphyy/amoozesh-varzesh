<template>
  <div
    class="dashboard-children-item max-md:py-12 max-md:px-16 flex flex-col justify-center cursor-pointer font-medium relative transition-all ease-linear hover:text-blue"
    :class="{
      'text-blue': checkIsActive,
    }">
    <MenuSideBarItem
      :nav-links="navLinks"
      :check-is-active="checkIsActive"
      @clicked="$emit('clicked')" />
  </div>
</template>

<script setup>
defineEmits(["clicked"]);
const props = defineProps({
  navLinks: {
    type: Object,
    required: true,
  },
});

const route = useRoute();

const checkIsActive = computed(() =>
  props.navLinks.routes.includes(route.name)
);
</script>

<style lang="scss" scoped>
.dashboard-children-item {
  padding: 12.5px 17px 12.5px 4px;
  // @include at-gte-l {
  //   padding-left: 17px;
  // }
}
</style>

<template>
  <div
    class="flex flex-col justify-center cursor-pointer font-medium relative transition-all ease-linear hover:text-blue"
    :class="{ 'text-blue': checkIsActive }">
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

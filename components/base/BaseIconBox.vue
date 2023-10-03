<template>
  <div
    class="shadow-xl shadow-beta-green-100/20 rounded-full flex justify-center items-center"
    :class="[borderClasses, sizingClasses]">
    <base-icon :icon-path="iconPath" svg-class="w-4 stroke-white" />
  </div>
</template>
<script setup>
defineProps({
  iconPath: {
    type: String,
    required: true,
  },
  borderClasses: {
    type: String,
    default: "border-beta-gray-100 border-4",
  },
  sizingClasses: {
    type: String,
    default: "w-12 h-12 bg-olied-100",
  },
});
</script>

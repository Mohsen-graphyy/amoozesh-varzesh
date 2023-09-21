<template>
  <div
    class="bg-white rounded-xl w-full flex flex-row md:flex-col items-center p-4">
    <base-icon-box
      :icon-path="iconPath"
      border-classes="border-8 border-gray-100"
      sizing-classes="w-16 h-16 bg-beta-green-100" />
    <p class="font-bold mr-4 text-gray-700 md:text-sm md:mt-4 md:mr-0">
      {{ title }}
    </p>
    <span
      class="hidden md:inline-block w-5 h-1 bg-gray-300 rounded mt-4"></span>
  </div>
</template>
<script>
export default {
  props: {
    iconPath: {
      type: String,
      requierd: true,
    },
    title: {
      type: String,
      requierd: true,
    },
  },
};
</script>

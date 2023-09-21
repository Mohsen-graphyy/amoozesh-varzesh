<template>
  <div
    class="bg-white rounded-xl w-full flex flex-col items-center p-4"
    :class="{ 'items-start': content }">
    <div
      class="flex w-full"
      :class="[
        content
          ? 'flex-row items-center justify-start mb-4'
          : 'flex-col items-center',
      ]">
      <base-icon-box
        border-classes="border-8 border-gray-100"
        sizing-classes="w-16 h-16 bg-beta-green-100"
        :class="{ 'ml-4': content }"
        :icon-path="iconPath" />
      <h2 class="font-bold mr-4 text-gray-700 md:text-sm md:mt-4 md:mr-0">
        {{ title }}
      </h2>
    </div>
    <p v-if="content" class="text-sm text-beta-gray-300">{{ content }}</p>
    <span
      class="h-1 bg-gray-300 rounded mt-4"
      :class="[lineWidth, content ? '' : 'hidden md:inline-block']"></span>
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
    content: {
      type: String,
      default: "",
    },
    lineWidth: {
      type: String,
      default: "w-5",
    },
  },
};
</script>

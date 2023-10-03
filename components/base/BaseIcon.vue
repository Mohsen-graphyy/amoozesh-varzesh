<template>
  <i>
    <component :is="icon" :class="[svgClass]"></component>
    <slot></slot>
  </i>
</template>

<script setup>
import { defineAsyncComponent, shallowRef, watchEffect } from "vue";

defineOptions({
  name: "BaseIcon",
});

const props = defineProps({
  svgClass: {
    type: [String, Object, Array],
    default: "",
  },
  iconPath: {
    type: String,
    required: true,
  },
});

const icon = shallowRef(null);
watchEffect(() => {
  icon.value = defineAsyncComponent(() =>
    import(`~/components/icon/${props.iconPath}.vue`)
  );
});
</script>

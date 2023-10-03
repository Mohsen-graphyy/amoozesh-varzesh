<template>
  <i>
    <component :is="icon" :class="[svgClass]"></component>
    <slot></slot>
  </i>
</template>

<script>
import { defineAsyncComponent, shallowRef, watchEffect } from "vue";

export default {
  name: "BaseIcon",
  props: {
    svgClass: {
      type: [String, Object, Array],
      default: "",
    },
    iconPath: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const icon = shallowRef(null);
    watchEffect(() => {
      icon.value = defineAsyncComponent(() =>
        import(`~/components/icon/${props.iconPath}.vue`)
      );
    });

    return { icon };
  },
};
</script>

<template>
  <i>
    <component :is="icon" :class="[svgClass]"></component>
    <slot></slot>
  </i>
</template>

<script>
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
  data() {
    return {
      icon: null,
    };
  },
  async created() {
    this.icon = await import(`~/components/icon/${this.iconPath}.vue`);
    this.icon = this.icon.default;
  },
};
</script>

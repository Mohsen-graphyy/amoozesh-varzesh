<template>
  <i :class="[` ${svgColor}`]">
    <component :class="[svgClass]" :is="icon"></component>
    <slot></slot>
  </i>
</template>
      
      <script>
export default {
  name: "BaseIcon",
  props: {
    color: {
      type: String,
      default: "",
    },
    svgClass: {
      type: [String, Object, Array],
      default: "",
    },
    size: {
      type: [String, Number],
      default: "10",
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
  computed: {
    svgColor() {
      return this.color ? `text-${this.color}` : "";
    },
  },
  async created() {
    this.icon = await import(`~/components/icon/${this.iconPath}.vue`);
    this.icon = this.icon.default;
  },
};
</script>
      
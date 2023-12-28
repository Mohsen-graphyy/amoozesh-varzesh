<template>
  <div class="flex flex-col">
    <p v-if="legend" class="mb-2 text-beta-gray-300 text-sm">{{ legend }} :</p>
    <div class="flex gap-5" :class="customClass">
      <div
        v-for="option in options"
        :key="option.value"
        class="flex items-center radiobtn">
        <label :for="option.value"
          ><slot name="label">
            {{ option.label }}
          </slot></label
        >
        <input
          v-bind="$attrs"
          type="radio"
          :value="option.value"
          :id="option.value"
          :checked="modelValue === option.value"
          @input="$emit('update:modelValue', $event.target.value)" />
        <span class="checkmark"></span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String || Null,
    required: true,
  },
  legend: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>
<style lang="scss" scoped>
.radiobtn {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radiobtn input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  border: 2px solid #36b06b;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radiobtn input:checked ~ .checkmark:after {
  display: block;
  height: 10px;
  width: 10px;
  background-color: #36b06b;
}

/* Style the indicator (dot/circle) */
.radiobtn .checkmark:after {
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>

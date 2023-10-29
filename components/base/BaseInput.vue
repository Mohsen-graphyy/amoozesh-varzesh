<template>
  <div class="flex flex-col" :class="[wrapperClass]">
    <label
      v-if="label || $slots.label"
      :for="id"
      class="text-tiny text-dark font-bold mb-4"
      >{{ label }}</label
    >
    <div class="relative">
      <input
        class="w-full rounded-lg h-12 bg-beta-gray-50 border border-solid outline-none pr-11 placeholder:text-beta-gray-150 placeholder:text-sm"
        :class="{ 'border-red-500': errorMessage, 'border-green-500': isValid }"
        type="text"
        :id="id"
        :placeholder="placeholder"
        :value="modelValue"
        @input="onInput($event.target.value)"
        @blur="validate" />
      <BaseIcon
        :icon-path="icon"
        class="absolute top-3 right-3"
        :class="[errorMessage ? 'stroke-red-500' : 'stroke-beta-gray-300']"
        svg-class="w-6" />
      <BaseIcon
        v-if="isValid"
        icon-path="Correct"
        class="absolute top-3 left-3 w-6 text-green-500" />
    </div>
    <Transition name="slide-down-fade">
      <p v-if="errorMessage" class="text-red-500 mt-2 text-sm">
        {{ errorMessage }}
      </p>
    </Transition>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: { type: String, required: true },
  label: { type: String, default: "" },
  id: { type: String, required: true },
  placeholder: { type: String, default: "" },
  rules: { type: Array, default: () => [] },
  isLazyValidation: { type: Boolean, default: true },
  modelValue: { type: String, default: "" },
  wrapperClass: {
    type: [String, Array, Object],
    default: "",
  },
});
const errorMessage = ref("");
const isValid = ref(false);
const emit = defineEmits(["update:modelValue", "validitionState"]);
watch(
  () => props.modelValue,
  () => {
    if (!props.isLazyValidation) validate();
  }
);
function onInput(value) {
  emit("update:modelValue", value);
  if (value) {
    errorMessage.value = "";
  }
}
function validate() {
  props.rules.forEach((pattern) => {
    const testResult = pattern(props.modelValue);
    if (testResult !== true) errorMessage.value = testResult;
  });
  isValid.value = !errorMessage.value ? true : false;
  emit("validitionState", isValid.value);
}
</script>
<style>
.slide-down-fade-enter-active,
.slide-down-fade-leave-active {
  transition: all 0.2s ease-out;
}
.slide-down-fade-enter-from,
.slide-down-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>

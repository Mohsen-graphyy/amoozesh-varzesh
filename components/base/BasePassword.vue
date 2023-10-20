<template>
  <div class="flex flex-col">
    <label
      v-if="label || $slots.label"
      :for="id"
      class="text-tiny text-dark font-bold mb-4"
      >{{ label }}</label
    >
    <div class="relative">
      <input
        class="w-full rounded-lg h-12 bg-beta-gray-50 border border-solid outline-none pr-11 placeholder:text-beta-gray-150 placeholder:text-sm"
        :class="{ 'border-red-500': errorMessage }"
        :type="showPassword ? 'text' : 'password'"
        :id="id"
        :placeholder="placeholder"
        :value="modelValue"
        @input="onInput($event.target.value)"
        @blur="validate" />
      <BaseIcon
        icon-path="Password"
        class="absolute top-3 right-3"
        :class="[errorMessage ? 'stroke-red-500' : 'stroke-beta-gray-300']"
        svg-class="w-6" />
      <BaseIcon
        icon-path="Eye"
        class="absolute top-3 left-3 cursor-pointer"
        svg-class="w-6 stroke-beta-gray-300"
        @click="showPassword = !showPassword" />
    </div>
    <Transition name="fade">
      <p v-if="errorMessage" class="text-red-500 mt-2 text-sm">
        {{ errorMessage }}
      </p>
    </Transition>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: { type: String, required: true },
  isRequired: { type: Boolean, default: false },
  label: { type: String, default: "" },
  id: { type: String, required: true },
  placeholder: { type: String, default: "رمز عبور" },
  rules: { type: Array, default: () => [ruleNotEmpty] },
  isLazyValidation: { type: Boolean, default: true },
  modelValue: { type: String, default: "" },
});
const errorMessage = ref("");
const showPassword = ref(false);
const emit = defineEmits(["update:modelValue", "error"]);
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
}
</script>

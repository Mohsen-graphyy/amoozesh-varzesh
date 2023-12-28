<template>
  <BaseInput
    v-bind="$attrs"
    class="!cursor-pointer read-only:text-black custom-date-input"
    readonly
    v-model="display"
    :rules="rules"
    :is-lazy-validation="false"
    @validitionState="salam" />
  <date-picker
    custom-input=".custom-date-input"
    v-model="dateRef"
    auto-submit
    :min="min"
    :max="max"
    :disable="disable"
    @change="$emit('update:modelValue', $event.format('YYYY-MM-DD'))"
    format="YYYY-MM-DD" />
</template>

<script setup>
// ❗️ this component accepts any attribute that is acceptable in BaseInput ❗️
import DatePicker from "vue3-persian-datetime-picker";

defineOptions({ name: "BaseDatePicker", inheritAttrs: false });
defineEmits(["update:modelValue", "error"]);

const props = defineProps({
  modelValue: { type: String, default: "" },
  min: { type: [String, null], default: null },
  max: { type: [String, null], default: null },
  disable: { type: [String, Array, Function, RegExp], required: false },
  rules: { type: Array, default: () => [] },
});

const dateRef = toRef(props.modelValue);
const display = ref(null);
watch(
  () => dateRef.value,
  () => {
    console.log("salam", dateRef.value);
    display.value = dateFa(dateRef.value);
  },
  {
    immediate: true,
  }
);
const salam = (kir) => console.log("salaassdsds", kir);
</script>
<style>
.custom-date-input {
  background-color: inherit;
}
</style>

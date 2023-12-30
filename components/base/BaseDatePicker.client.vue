<template>
  <BaseInput
    v-bind="$attrs"
    class="!cursor-pointer read-only:text-black custom-date-input"
    readonly
    v-model="display"
    :is-lazy-validation="false"
    @validitionState="$emit('status')" />
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
defineEmits(["update:modelValue", "status"]);

const props = defineProps({
  modelValue: { type: String, default: "" },
  min: { type: [String, null], default: null },
  max: { type: [String, null], default: null },
  disable: { type: [String, Array, Function, RegExp], required: false },
});

const dateRef = toRef(props.modelValue);
const display = ref(null);
watch(
  () => dateRef.value,
  () => {
    display.value = dateFa(dateRef.value);
  },
  {
    immediate: true,
  }
);
watch(
  () => props.modelValue,
  () => {
    display.value = dateFa(props.modelValue);
  },
  {
    immediate: true,
  }
);
</script>

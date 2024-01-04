<template>
  <BaseInput
    v-bind="$attrs"
    v-click-outside="
      () => {
        isActiveRef = false;
      }
    "
    class="!cursor-pointer read-only:text-black"
    ref="input"
    :readonly="!searchable"
    icon="Person"
    :model-value="selectedOptionText"
    @update:modelValue="onSearch"
    @click="isActiveRef = !isActiveRef">
    <!-- @error="$emit('error', $event)" -->
    <template v-slot:extraContent>
      <transition name="scale">
        <ul
          v-if="isActiveRef"
          class="base-select__options bg-gray-50 shadow-lg rounded p-2 scrollbar overflow-y-auto">
          <template v-if="options.length">
            <li
              v-for="(option, index) in options"
              :key="index"
              class="p-2 rounded cursor-pointer text-tiny hover:bg-beta-gray-50"
              :class="{
                '!bg-beta-gray-100':
                  selectedOptionKey &&
                  option[optionValueKey] === selectedOptionKey,
              }"
              @click="onOptionClick(option)">
              {{ option[optionTextKey] }}
            </li>
          </template>
          <li
            v-else
            class="my-4 px-4 rounded text-tiny"
            @click="isActiveRef = false">
            {{ isLoading ? "در حال بارگزاری..." : "موردی یافت نشد" }}
          </li>
        </ul>
      </transition>
    </template>
    <template v-slot:left-icon>
      <BaseIcon
        class="absolute top-3 left-3"
        :class="[isActiveRef ? 'rotate-90' : '-rotate-90']"
        svg-class="w-5 h-5 stroke-beta-gray-700"
        icon-path="Arrow" />
    </template>
  </BaseInput>
  <slot v-if="$slots.extraContent" name="extraContent"></slot>
</template>

<script setup>
// ❗️ this component accepts any attribute that is acceptable in BaseInput ❗️
defineOptions({ name: "BaseSelect" });

const emit = defineEmits(["update:modelValue", "update:search", "error"]);

const props = defineProps({
  modelValue: { type: [String, Number], default: "" },
  options: { type: Array, default: () => [] },
  optionValueKey: { type: String, default: "value" },
  optionTextKey: { type: String, default: "text" },
  isLoading: { type: Boolean, default: false },
  searchable: { type: Boolean, default: false },
  search: { type: String, value: "" },
});

const selectedOptionText = computed(() => {
  const option = props.options.find(
    (option) => option[props.optionValueKey] === props.modelValue
  );
  return option ? option[props.optionTextKey] : props.search;
});
const selectedOptionKey = computed(() => {
  const option = props.options.find(
    (option) => option[props.optionValueKey] === props.modelValue
  );
  return option[props.optionValueKey];
});

const isActiveRef = ref(false);
const onSearch = () => {
  console.log("salam");
};
const onOptionClick = (option) => {
  emit("update:modelValue", option[props.optionValueKey]);
  isActiveRef.value = false;
};
</script>

<style lang="scss" scoped>
.base-select {
  height: 50px;
}
.base-select__options {
  max-height: 220px;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease-out;
}
.scale-enter-from,
.scale-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>

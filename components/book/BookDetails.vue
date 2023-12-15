<template>
  <div class="flex flex-col bg-white p-4 rounded-lg">
    <div
      class="grid grid-cols-2 md:grid-cols-4 border gap-7 border-beta-gray-50 p-4 rounded-lg">
      <button
        v-for="detailHeader in detailHeaders"
        :key="detailHeader.id"
        class="relative flex items-center gap-2"
        @click="selecetedComponent = detailHeader.component">
        <BaseIcon
          :icon-path="detailHeader.icon"
          :svg-class="
            detailHeader.component === selecetedComponent
              ? 'stroke-beta-green-100 w-4 h-4'
              : 'stroke-beta-gray-500 w-4 h-4'
          " />
        <p
          class="text-beta-gray-500 md:text-sm"
          :class="{
            'text-beta-green-100 font-semibold':
              detailHeader.component === selecetedComponent,
          }">
          {{ detailHeader.title }}
        </p>
        <div
          v-if="detailHeader.component === selecetedComponent"
          class="absolute w-12 h-1 rounded-b-lg -bottom-5 right-8 bg-beta-green-100"></div>
      </button>
    </div>
    <Transition name="fade">
      <component :is="currentComponent"></component>
    </Transition>
  </div>
</template>
<script setup>
const isflag = ref(true);

const detailHeaders = [
  {
    id: 1,
    icon: "Document",
    title: "توضیحات بیشتر",
    component: "BookMoreDetails",
  },
  {
    id: 2,
    icon: "Image",
    title: "تصاویر کتاب",
    component: "BookImages",
  },
];
const selecetedComponent = ref("BookMoreDetails");
const currentComponent = shallowRef(null);
watch(
  () => selecetedComponent.value,
  () => {
    currentComponent.value = defineAsyncComponent(() =>
      import(`./../book/${selecetedComponent.value}.vue`)
    );
  },
  {
    immediate: true,
  }
);
</script>

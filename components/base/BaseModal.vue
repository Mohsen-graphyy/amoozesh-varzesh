<template>
  <teleport to="body" :disabled="disableTeleport">
    <transition name="fade">
      <div
        v-show="isModalOpen"
        class="base-modal flex justify-center items-center fixed right-0 left-0 px-5"
        :class="modalMainClass">
        <base-shadow is-show @click="closeOutsideModal" />
        <div
          class="base-modal__box relative flex flex-col bg-white shadow-xl rounded-lg w-full p-6 mx-5 overflow-y-auto"
          :class="boxClasses">
          <div
            class="flex items-center w-full"
            :class="[
              { 'flex-row-reverse': !$slots.title || isCloseRight },
              closeable && !isCloseRight ? 'justify-between' : 'justify-end',
            ]">
            <div v-if="$slots.title" class="w-full">
              <slot name="title"></slot>
            </div>
            <button
              v-if="closeable"
              class="bg-transparent cursor-pointer"
              @click="$emit('close-modal')">
              <base-icon icon-path="Close" svg-class="stroke-black w-5 h-5" />
            </button>
          </div>
          <slot name="bodyContent"></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script setup>
const props = defineProps({
  isModalOpen: {
    type: Boolean,
    default: false,
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  isOutsideCloseable: {
    type: Boolean,
    default: true,
  },
  isCloseRight: {
    type: Boolean,
    default: false,
  },
  modalMainClass: {
    type: String,
    default: "",
  },
  boxClasses: {
    type: String,
    default: "",
  },
  isBlurryShadow: {
    type: Boolean,
    default: false,
  },
  disableTeleport: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close-modal"]);

function closeOutsideModal() {
  if (props.isOutsideCloseable) {
    emit("close-modal");
  }
}
</script>
<style lang="scss" scoped>
.base-modal {
  top: 18%;
  z-index: 99999;
}
.base-modal__box {
  max-height: 80vh;
  max-width: 500px;
  z-index: 101;
}
</style>

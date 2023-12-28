<template>
  <div>
    <p class="text-beta-gray-500 font-semibold">{{ title }}</p>
    <ul>
      <li
        v-for="item in bookItems"
        :key="item.id"
        class="list-inside list-item list-disc">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  bookItems: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

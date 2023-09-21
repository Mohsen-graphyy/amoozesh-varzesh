<template>
  <div
    class="flex mx-4 md:mx-20 py-24 flex-col md:flex-row md:justify-between gap-4 items-center md:items-stretch">
    <access-box
      v-for="accessItem in accessListItem"
      :key="accessItem.id"
      :icon-path="accessItem.iconPath"
      :title="accessItem.title" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      accessListItem: [
        {
          id: 1,
          iconPath: "Home",
          title: "سمینارها و کارگاه ها",
        },
        {
          id: 2,
          iconPath: "Home",
          title: "مربیگری و داوری",
        },
        {
          id: 3,
          iconPath: "Home",
          title: "همایش های ورزشی",
        },
        {
          id: 4,
          iconPath: "Home",
          title: "دوره های آفلاین",
        },
        {
          id: 5,
          iconPath: "Home",
          title: "خرید کتاب",
        },
      ],
    };
  },
};
</script>

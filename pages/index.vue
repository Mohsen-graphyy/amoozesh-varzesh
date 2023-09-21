<template>
  <home-hero-section />
  <home-access-box-section />
  <home-course-describe />
  <home-languege-section />
  <home-live-section />
  <home-perpuse-section />
</template>

<script>
definePageMeta({
  name: "home",
});
export default {
  data() {
    return {
      featureNumbers: [
        {
          id: 1,
          iconPath: "Cup",
          title: "سال همراهی با شما",
          number: 7,
        },
        {
          id: 2,
          iconPath: "Education",
          title: "معرفی دوره های آموزشی",
          number: 7000,
        },
        {
          id: 3,
          iconPath: "Webinar",
          title: "وبینار آموزشی رایگان",
          number: 60,
        },
      ],
    };
  },
};
</script>

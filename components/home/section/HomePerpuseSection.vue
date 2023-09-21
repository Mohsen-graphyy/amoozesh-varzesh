<template>
  <div
    class="mx-4 md:mx-20 flex flex-col md:flex-row justify-between items-center pb-20 mt-20">
    <base-paragraph
      class="text-beta-gray-700 basis-1/2"
      paragraph-class="text-gray-700"
      title="اهداف و چشم اندازهای ما"
      content="هر هفته یک یا دو لایو آموزشی و کاربردی در خصوص گرایش‌های مختلف علوم ورزشی، معرفی رشته‌های مختلف، دوره‌های مربیگری و موضوع روز دنیای ورزش خواهیم داشت، که اگر صفحه اینستاگرام مارو فالو داشته باشید، می‌توانید هرهفته از آموزش‌های رایگان این بخش استفاده کنید.">
      <template #customBody>
        <div class="grid grid-cols-2 md:grid-cols-3 justify-between">
          <feature-number
            v-for="featureNumber in featureNumbers"
            :key="featureNumber.id"
            class="ml-14 mt-6 w-full"
            :icon-path="featureNumber.iconPath"
            :title="featureNumber.title"
            :number="featureNumber.number" />
        </div>
      </template>
    </base-paragraph>
    <img
      src="/images/standman.png"
      alt="آموزش ورزش"
      class="w-full md:w-2/5 mt-10 md:m-0" />
  </div>
</template>
<script>
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

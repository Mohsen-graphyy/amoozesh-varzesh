<template>
  <div class="bg-olied-100 !py-32">
    <div
      class="mx-4 md:mx-20 flex flex-col md:flex-row justify-between items-center">
      <base-paragraph
        class="text-white basis-1/2 mt-24"
        title="سامانه آموزش ورزش؛ تلفیق علم و عمل"
        content="سامانه آموزش ورزش از سال 1396 با حضور چند نفر از دانشجویان علوم ورزشی که دغدغه‌مند بودند و سعی داشتند ارزش واقعی این رشته را به دیگران نشان دهند شکل گرفت. این دوستان با استفاده از زیرساخت‌های موجود ابتدا در کانال‌های پیامرسان تلگرام سعی داشتند که دوره‌های ورزشی معتبر را به دوستان معرفی کنند." />
      <img src="/images/manExer.png" alt="آموزش ورزش" class="w-full md:w-2/5" />
    </div>
  </div>
  <base-curved class="before:bg-olied-100" />
  <div
    class="flex mx-4 md:mx-20 py-24 flex-col md:flex-row md:justify-between gap-4 items-center md:items-stretch">
    <access-box
      v-for="accessItem in accessListItem"
      :key="accessItem.id"
      :icon-path="accessItem.iconPath"
      :title="accessItem.title" />
  </div>
  <div
    class="mx-4 md:mx-20 flex flex-col md:flex-row-reverse justify-between items-center pb-20">
    <base-paragraph
      class="text-olied-100 basis-1/2"
      paragraph-class="text-gray-700"
      title="سامانه آموزش ورزش؛ تلفیق علم و عمل"
      content="سامانه آموزش ورزش از سال 1396 با حضور چند نفر از دانشجویان علوم ورزشی که دغدغه‌مند بودند و سعی داشتند ارزش واقعی این رشته را به دیگران نشان دهند شکل گرفت. این دوستان با استفاده از زیرساخت‌های موجود ابتدا در کانال‌های پیامرسان تلگرام سعی داشتند که دوره‌های ورزشی معتبر را به دوستان معرفی کنند.">
      <template #subtitle>
        <h1 class="text-gray-700 font-semibold">معرفی دوره های</h1>
      </template>
    </base-paragraph>
    <img
      src="/images/manExer2.png"
      alt="آموزش ورزش"
      class="w-full md:w-2/5 mt-10 md:m-0" />
  </div>
  <div class="mx-4 md:mx-20 flex flex-col pb-20">
    <base-paragraph
      class="text-gray-700"
      paragraph-class=""
      title="زبان تخصصی علوم ورزش">
      <template #customBody>
        <div
          class="grid self-center grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 mt-4 gap-4">
          <img
            v-for="image in englishImage"
            :key="image.id"
            :src="image.path"
            alt="" />
        </div>
      </template>
    </base-paragraph>
  </div>
  <div class="bg-beta-gray-700 py-12">
    <div
      class="mx-4 md:mx-20 flex flex-col md:flex-row justify-between items-center">
      <base-paragraph
        class="text-white basis-1/2 mt-24"
        title="برگزاری لایوهای آموزشی"
        content="هر هفته یک یا دو لایو آموزشی و کاربردی در خصوص گرایش‌های تربیت بدنی و رشته‌های مختلف ورزشی خواهیم داشت، که اگر صفحه اینستاگرام مارو فالو کنید می‌توانید هرهفته از آموزش‌های رایگان این بخش استفاده کنید.">
        <template #customBody>
          <p class="mt-4 flex justify-end">
            <base-button
              title="مشاهده تمام لایو ها"
              custom-class="bg-beta-green-100 text-white transition duration-200 hover:bg-transparent border border-transparent hover:border-white text-sm font-bold" />
          </p>
        </template>
      </base-paragraph>
      <img
        src="/images/iran.png"
        alt="آموزش ورزش"
        class="w-full md:w-2/5 mt-10 md:m-0" />
    </div>
  </div>
  <base-curved class="before:bg-beta-gray-700" />
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
      englishImage: [
        {
          id: 1,
          path: "/images/image3.png",
        },
        {
          id: 2,
          path: "/images/image4.png",
        },
        {
          id: 3,
          path: "/images/image5.png",
        },
        {
          id: 4,
          path: "/images/image6.png",
        },
      ],
    };
  },
};
</script>

<style></style>

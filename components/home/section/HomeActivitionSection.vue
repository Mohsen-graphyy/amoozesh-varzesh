<template>
  <div class="mx-4 md:mx-20 flex flex-col pb-20">
    <base-paragraph
      class="text-gray-700"
      paragraph-class=""
      title="فعالیت‌های سامانه آموزش ورزش">
      <template #customBody>
        <section class="flex flex-col md:flex-row gap-4 mt-4">
          <access-box
            v-for="accessItem in accessListItem"
            :key="accessItem.id"
            :icon-path="accessItem.iconPath"
            :title="accessItem.title"
            :content="accessItem.content"
            lineWidth="w-14 mt-8" />
        </section>
      </template>
    </base-paragraph>
  </div>
</template>
<script>
export default {
  data() {
    return {
      accessListItem: [
        {
          id: 1,
          iconPath: "Trophy",
          title: "معرفی انجمن‌های ورزشی",
          content:
            "در این مجموعه سعی داریم تا با همکاری با انجمن‌های ورزشی دانشگاه‌های سراسر کشور، در خصوص برگزاری دوره‌ها بتوانیم کمکی به رشد این انجمن‌ها و نیروهای داوطلب کرده باشیم.",
        },
        {
          id: 2,
          iconPath: "Japeneese",
          title: "زبان تخصصی علوم ورزشی",
          content:
            "با دعوت از اساتید مطرح کشوری که نویسنده کتاب‌های رفرنس کنکور هستند، سوالات و منابع 3 کنکور کارشناسی، کارشناسی ارشد و دکتری را بررسی می‌کنیم.",
        },
        {
          id: 3,
          iconPath: "Book",
          title: "معرفی کتاب‌های علوم ورزشی",
          content:
            "با دعوت از ناشرین محترم از انتشارات‌ مختلف علوم ورزشی می‌خواهیم که کتاب‌های جدید که تازه منتشر شده‌اند، را به علاقه‌مندان به کتاب و ورزش معرفی کنند.",
        },
      ],
    };
  },
};
</script>

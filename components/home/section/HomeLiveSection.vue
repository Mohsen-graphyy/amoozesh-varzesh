<template>
  <div class="bg-beta-gray-700 py-12">
    <div
      class="mx-4 md:mx-20 flex flex-col md:flex-row justify-between items-center">
      <base-paragraph
        class="text-white basis-1/2 mt-24"
        title="برگزاری لایوهای آموزشی"
        content="هر هفته یک یا دو لایو آموزشی و کاربردی در خصوص گرایش‌های تربیت بدنی و رشته‌های مختلف ورزشی خواهیم داشت، که اگر صفحه اینستاگرام مارو فالو کنید می‌توانید هرهفته از آموزش‌های رایگان این بخش استفاده کنید.">
        <template #customBody>
          <div class="mt-4 flex justify-end">
            <base-button
              title="مشاهده تمام لایو ها"
              custom-class="bg-beta-green-100 text-white transition duration-200 hover:bg-transparent border border-transparent hover:border-white text-sm font-bold" />
          </div>
        </template>
      </base-paragraph>
      <img
        src="/images/iran.png"
        alt="آموزش ورزش"
        class="w-full md:w-2/5 mt-10 md:m-0" />
    </div>
  </div>
  <base-curved class="before:bg-beta-gray-700" />
</template>

<template>
  <section class="!py-32 flex flex-col mx-4 md:mx-20">
    <div class="flex flex-col md:flex-row justify-between items-center gap-20">
      <BaseParagraph
        class="basis-1/2"
        title=" سامانه آموزش ورزش"
        title-class="text-olied-100">
        <template #subtitle>معرفی ما </template>
        <template #customBody>
          <div class="flex">
            <p
              class="text-beta-gray-500 md:text-sm lg:text-base mt-4 text-justify">
              سامانه آموزش ورزش از سال 1396 با حضور چند نفر از دانشجویان علوم
              ورزشی که دغدغه‌مند بودند و سعی داشتند ارزش واقعی این رشته را به
              دیگران نشان دهند شکل گرفت. این دوستان با استفاده از زیرساخت‌های
              موجود ابتدا در کانال‌های پیامرسان تلگرام سعی داشتند که دوره‌های
              ورزشی معتبر را به دوستان معرفی کنند. کم کم با اضافه شدن افراد
              بیشتر این تیم قوی‌تر شد و در سایر پیامرسان های موجود مانند
              اینستاگرام، واتساپ و آپارات شروع به فعالیت کردند و فعالیت خود را
              از معرفی دوره‌های آموزشی ورزشی کشور به موارد دیگری همچون آموزش
              زبان تخصصی علوم ورزشی، لایوهای اموزشی رایگان، بررسی کنکورهای علوم
              ورزشی و معرفی کتاب‌های ورزشی و غیره… گسترش دادند.
            </p>
          </div>
        </template>
      </BaseParagraph>
      <nuxt-img
        src="/images/aboutus.png"
        class="w-full md:w-1/3"
        width="447"
        height="447"
        alt="آموزش ورزش" />
    </div>
    <base-paragraph class="mt-32" title="اعضای تیم آموزش ورزش">
      <template #customBody>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          <div
            v-for="employee in employes"
            :key="employee.id"
            class="bg-white p-4 flex flex-col items-center justify-center rounded-xl">
            <nuxt-img
              class="rounded-lg"
              :src="`/images/${employee.image}`"
              :alt="employee.name"
              width="227"
              height="227" />
            <h1 class="mt-4">{{ employee.name }}</h1>
            <base-icon
              icon-path="Wave"
              svg-class="stroke-beta-green-100 w-10" />

            <p
              v-for="position in employee.positions"
              :key="position"
              class="text-beta-gray-500 text-sm">
              {{ position }}
            </p>
          </div>
        </div>
      </template>
    </base-paragraph>
  </section>
</template>

<script setup>
definePageMeta({
  name: "aboutUs",
});
const employes = [
  {
    id: 1,
    name: "عباس علیدوست",
    image: "abaas-alidoost.png",
    positions: [
      "مسئول سامانه آموزش ورزش",
      "مدیر بازاریابی آموزش ورزش",
      "کارشناسی ارشد علوم ورزشی",
    ],
  },
  {
    id: 2,
    name: "فرشته فیروزیان",
    image: "fereshteh-firoozian.png",
    positions: [
      "طراح گرافیک آموزش ورزش",
      "طراح سایت آموزش ورزش",
      "کارشناسی ارشد علوم ورزشی",
    ],
  },
  {
    id: 3,
    name: "نیما فیروزیان",
    image: "nima-firoozian.png",
    positions: [
      "مدیر ثبت نام دوره‌ها",
      "مدیر پیج دوره‌های مربیگری",
      "کارشناسی علوم ورزشی",
    ],
  },
  {
    id: 4,
    name: "مهندیس نصر",
    image: "mahdis-nasr.png",
    positions: [
      "مدیر ثبت نام دوره‌ها",
      "مدیر پیج مربیان ایران ",
      "کارشناسی علوم ورزشی",
    ],
  },
  {
    id: 5,
    name: "ساجد اکبری",
    image: "sajed-akbari.png",
    positions: [
      "مدیر ثبت نام دوره‌ها",
      "مدیر پیج مربیگری ورزشی  ",
      "کارشناسی علوم ورزشی",
    ],
  },
  {
    id: 6,
    name: "حسن علیدوست",
    image: "hasan-alidoost.png",
    positions: [
      "مدیر بخش زبان تخصصی علوم ورزشی",
      "مدرس بین المللی زبان انگلیسی",
    ],
  },
  {
    id: 7,
    name: "لیلا خلیلی",
    image: "leyla-khalili.png",
    positions: [
      "مدیر بخش زبان تخصصی علوم ورزشی",
      "مدرس بین المللی زبان انگلیسی",
    ],
  },
];
</script>

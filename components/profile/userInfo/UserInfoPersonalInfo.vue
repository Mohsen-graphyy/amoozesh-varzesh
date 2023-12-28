<template>
  <ProfileMainContainer title="مشخصات فردی">
    <template #body>
      <div class="flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
          <BaseInput
            id="full_name"
            placeholder="نام و نام خانوادگی به فارسی"
            icon="Person"
            :is-lazy-validation="false"
            :rules="[ruleCharsPersian]"
            v-model="state.fullname_fa" />
          <BaseInput
            id="fullname_en"
            icon="Person"
            placeholder="نام و نام خانوادگی به انگلیسی"
            :rules="[ruleCharsEn]"
            :is-lazy-validation="false"
            v-model="state.fullname_en" />
          <div>
            <BaseDatePicker
              id="inputBirthDate"
              icon="Calender"
              :rules="[ruleNotEmpty]"
              placeholder="تاریخ تولد"
              v-model="state.birthdate" />
          </div>
          <BaseRadioButton
            v-model="state.nationality"
            legend="تعیین اتباع"
            :options="nationalOptions" />
          <BaseInput
            v-if="state.nationality === 'irani'"
            id="full_name"
            placeholder="کد ملی"
            icon="IdCard"
            :is-lazy-validation="false"
            :rules="[ruleCharsPersian]"
            v-model="state.fullname_fa" />
          <BaseInput
            v-else
            id="full_name"
            placeholder="شناسه پاسپورت"
            icon="Person"
            :is-lazy-validation="false"
            :rules="[ruleCharsPersian]"
            v-model="state.fullname_fa" />
          <BaseRadioButton
            v-model="state.gender"
            legend="جنسیت"
            :options="genderOptions" />
        </div>
        <BaseButton
          title="تایید و ذخیره"
          class="bg-olied-50 mt-4 w-fit self-end hover:bg-olied-100 rounded-xl text-center text-white transition duration-150 cursor-pointer" />
      </div>
    </template>
  </ProfileMainContainer>
</template>
<script setup>
const state = reactive({
  fullname_fa: null,
  fullname_en: null,
  birthdate: null,
  nationality: "irani",
  gender: null,
});
const genderOptions = [
  {
    label: "آقا",
    value: "male",
  },
  {
    label: "خانم",
    value: "female",
  },
];
const nationalOptions = [
  {
    label: "ایرانی هستم",
    value: "irani",
  },
  {
    label: "ایرانی نیستم",
    value: "no-irani",
  },
];
</script>

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
            v-model="state.nationality.id"
            legend="تعیین اتباع"
            name="nationality"
            :options="nationalOptions" />
          <BaseInput
            v-if="+state.nationality.id === 1"
            id="meli_code"
            placeholder="کد ملی"
            icon="IdCard"
            :is-lazy-validation="false"
            v-model="state.national_id" />
          <BaseInput
            v-else
            id="passport"
            placeholder="شناسه پاسپورت"
            icon="IdCard"
            :is-lazy-validation="false"
            v-model="state.passport_id" />
          <BaseRadioButton
            v-model="state.gender.id"
            legend="جنسیت"
            name="gender"
            :options="genderOptions" />
        </div>
        <BaseButton
          title="تایید و ذخیره"
          class="bg-olied-50 mt-4 md:w-fit md:self-end hover:bg-olied-100 rounded-xl text-center text-white transition duration-150 cursor-pointer"
          :is-loader="isLoadBtn"
          @click="submitUserInfo" />
      </div>
    </template>
  </ProfileMainContainer>
</template>
<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
const isLoadBtn = ref(false);
const state = ref({
  fullname_fa: null,
  fullname_en: null,
  birthdate: null,
  nationality: { id: 1 },
  gender: { id: null },
  national_id: null,
  passport_id: null,
  national_id_image: null,
});

const getUserInfo = async () => {
  const { data: userInfo, status } = await useApi(
    `${serviceProfile.profileInfo}/1/`
  );
  if (status.value === "success") {
    state.value = userInfo.value;
  }
};

const submitUserInfo = async () => {
  isLoadBtn.value = true;
  state.value.gender = state.value.gender.id;
  state.value.nationality = state.value.nationality.id;
  state.value.national_id_image = null;
  const { status } = await useApi(`${serviceProfile.profileInfo}/1/`, "PATCH", {
    body: state.value,
  });
  if (status.value === "success") {
    toast.success("مشخصات فردی شما به‌روز‌رسانی شد");
    getUserInfo();
  }
  isLoadBtn.value = false;
};

getUserInfo();
const genderOptions = [
  {
    label: "آقا",
    value: 1,
    id: "male",
  },
  {
    label: "خانم",
    value: 2,
    id: "female",
  },
];
const nationalOptions = [
  {
    label: "ایرانی هستم",
    value: 1,
    id: "Iranian",
  },
  {
    label: "ایرانی نیستم",
    value: 2,
    id: "no_iranian",
  },
];
</script>

<template>
  <ProfileMainContainer title="اطلاعات تحصیلی">
    <template #body>
      <div class="flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
          <BaseSelect
            v-model="state.degree.id"
            id="education"
            :options="degreeList" />
          <BaseInput
            id="major"
            placeholder="رشته تحصیلی"
            icon="Education"
            :is-lazy-validation="false"
            v-model="state.major" />
          <BaseRadioButton
            v-model="state.studied_phys_ed.id"
            legend="یکی از گزینه‌های زیر را انتخاب کنید"
            name="educationPhy"
            :options="studiedPhy" />
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
  degree: { id: 1 },
  major: null,
  studied_phys_ed: {
    id: null,
  },
});

const getUserInfo = async () => {
  const { data: userInfo, status } = await useApi(
    `${serviceProfile.educationInfo}/1/`
  );
  if (status.value === "success") {
    state.value = userInfo.value;
  }
};

const submitUserInfo = async () => {
  isLoadBtn.value = true;
  state.value.degree = state.value.degree.id;
  state.value.studied_phys_ed = state.value.studied_phys_ed.id;
  const { status } = await useApi(`${serviceProfile.educationInfo}/1/`, "PUT", {
    body: state.value,
  });
  if (status.value === "success") {
    toast.success("اطلاعات تحصیلی شما به‌روز‌رسانی شد");
    getUserInfo();
  }
  isLoadBtn.value = false;
};
getUserInfo()
const degreeList = [
  {
    text: "آخرین مقطع تحصیلی",
    value: 1,
  },
  {
    text: "راهنمایی",
    value: 2,
  },
  {
    text: "دیپلم",
    value: 3,
  },
  {
    text: "کاردانی",
    value: 4,
  },
  {
    text: "کارشناسی",
    value: 5,
  },
  {
    text: "کارشناسی ارشد",
    value: 6,
  },
  {
    text: "دکترا",
    value: 7,
  },
];

const studiedPhy = [
  {
    label: "تربیت بدنی هستم",
    value: 1,
    id: "yes_education",
  },
  {
    label: "تربیت بندی نیستم",
    value: 2,
    id: "no_education",
  },
];
</script>

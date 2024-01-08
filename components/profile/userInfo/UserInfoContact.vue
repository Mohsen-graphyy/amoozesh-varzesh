<template>
  <ProfileMainContainer title="اطلاعات تماس">
    <template #body>
      <div class="flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
          <BaseInput
            id="username"
            placeholder="شماره همراه خود را وارد کنید"
            icon="Mobile"
            :rules="[rulePhoneNumber]"
            :is-lazy-validation="false"
            v-model="state.user.phone_number" />
          <BaseInput
            id="email"
            placeholder="پست الکترونیکی"
            icon="Mail"
            :rules="[ruleEmail]"
            :is-lazy-validation="false"
            v-model="state.user.email" />
          <BaseSelect
            v-model="state.province"
            id="education"
            option-value-key="province_id"
            option-text-key="name"
            searchable
            title-item="استان محل سکونت"
            :options="provinces" />
          <BaseSelect
            v-model="state.city"
            id="education"
            option-value-key="province_id"
            option-text-key="name"
            title-item="شهر محل سکونت"
            :options="cities" />
        </div>
        <BaseButton
          title="تایید و ذخیره"
          class="bg-olied-50 mt-4 md:w-fit md:self-end hover:bg-olied-100 rounded-xl text-center text-white transition duration-150 cursor-pointer"
          :is-loader="isLoadBtn"
          @click="submitUserInfo" />
      </div>
    </template>
  </ProfileMainContainer>
  <UserInfoAddress :addresses="state.address" @update-address="getUserInfo" />
</template>
<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
const isLoadBtn = ref(false);
const state = ref({
  user: {
    phone_number: null,
    email: null,
  },
  province: null,
  city: null,
  address: [],
});

const getUserInfo = async () => {
  const {
    data: userInfo,
    status,
    message,
  } = await useApi(`${serviceProfile.contactInfo}/1/`);
  console.log(userInfo.value, status.value);
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
getUserInfo();
const provinces = [
  {
    province_id: 1,
    name: "آذربایجان شرقی",
  },
  {
    province_id: 2,
    name: "آذربایجان غربی",
  },
  {
    province_id: 3,
    name: "اردبیل",
  },
  {
    province_id: 4,
    name: "اصفهان",
  },
  {
    province_id: 5,
    name: "البرز",
  },
];

const cities = [
  {
    province_id: 1,
    name: "آذربایجان شرقی",
  },
  {
    province_id: 2,
    name: "آذربایجان غربی",
  },
  {
    province_id: 3,
    name: "اردبیل",
  },
  {
    province_id: 4,
    name: "اصفهان",
  },
  {
    province_id: 5,
    name: "البرز",
  },
];
</script>

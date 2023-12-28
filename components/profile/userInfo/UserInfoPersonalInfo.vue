<template>
  <ProfileMainContainer title="مشخصات فردی">
    <template #body>
      <div class="grid grid-cols-1 mt-5 gap-4">
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
          v-model="state.fullname_en"
          @error="changebirthdate" />
        <BaseDatePicker
          id="inputBirthDate"
          icon="Calender"
          :rules="[ruleNotEmpty]"
          placeholder="تاریخ تولد"
          v-model="state.birthdate" />
      </div>
      {{ state.birthdate }}
    </template>
  </ProfileMainContainer>
</template>
<script setup>
const state = reactive({
  fullname_fa: null,
  fullname_en: null,
  birthdate: null,
});
function changebirthdate(event) {
  console.log(event);
  console.log(state);
}
</script>

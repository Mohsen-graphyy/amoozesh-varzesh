<template>
  <ProfileMainContainer title="مشخصات فردی">
    <template #body>
      <div class="grid grid-cols-1 mt-5 gap-4">
        <BaseInput
          icon="Person"
          id="full_name"
          :rules="[ruleCharsPersian]"
          v-model="state.fullname_fa"
          placeholder="نام و نام خانوادگی به فارسی" />
        <BaseInput
          icon="Person"
          id="fullname_en"
          :rules="[ruleCharsEn]"
          v-model="state.fullname_en"
          placeholder="نام و نام خانوادگی به انگلیسی"
          @error="changebirthdate" />
        <BaseDatePicker
          id="inputBirthDate"
          icon="Calender"
          :rules="[ruleNotEmpty]"
          placeholder="loohjdf"
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

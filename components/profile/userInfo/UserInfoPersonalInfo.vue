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
          placeholder="نام و نام خانوادگی به انگلیسی" />
        <BaseInput
          icon="Calender"
          id="birthdate"
          :rules="[ruleCharsEn]"
          v-model="state.birthdate"
          placeholder="نام و نام خانوادگی به انگلیسی" />
      </div>
    </template>
  </ProfileMainContainer>
</template>
<script setup>
const state = reactive({
  fullname_fa: null,
  fullname_en: null,
  birthdate: null,
});
</script>

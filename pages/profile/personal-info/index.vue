<template>
  <ProfileLayoutContainer>
    <UserInfoPersonalInfo />
    <UserInfoEducation />
    <UserInfoContact />
  </ProfileLayoutContainer>
</template>
<script setup>
definePageMeta({
  name: "personalInfo",
  breadcrumbs: "ویرایش حساب کاربری",
});
</script>

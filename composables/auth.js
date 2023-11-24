export const isLogin = computed(() => {
  const token = useCookie("token");
  console.log(token.value);
  return !!token.value;
});

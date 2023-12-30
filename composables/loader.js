export const isLoader = ref(false);
export const startLoader = () => (isLoader.value = true);
export const stopLoader = () => (isLoader.value = false);

export const useInputRule = (props, emit) => {
  const errorTextRef = ref("");
  const failedRuleRef = ref(null);

  function validate() {
    for (const rule of props.rules) {
      const validationResult = rule(props.modelValue);
      if (typeof validationResult === "string") {
        emit("error", true);
        errorTextRef.value = validationResult;
        failedRuleRef.value = rule;
        break;
      }
      if (errorTextRef.value) {
        emit("error", false);
        errorTextRef.value = "";
        failedRuleRef.value = null;
      }
    }
  }

  return { errorTextRef, failedRuleRef, validate };
};

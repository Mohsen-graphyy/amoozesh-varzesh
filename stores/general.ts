export const useGenralStore = defineStore("general", {
  state: () => ({
    username: "",
    otpCode: "",
  }),
  actions: {
    setUsername(username: string) {
      this.username = username;
    },
    setOtpCode(otpCode: string) {
      this.otpCode = otpCode;
    },
  },
  getters: {
    // getters
  },
});

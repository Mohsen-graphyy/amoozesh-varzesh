export const useGenralStore = defineStore("general", {
  state: () => ({
    username: "",
    isLogin: false,
  }),
  actions: {
    setUsername(username: string) {
      this.username = username;
    },
    setIsLogin(isLogin: boolean) {
      this.isLogin = isLogin;
    },
  },
  getters: {
    // getters
  },
});

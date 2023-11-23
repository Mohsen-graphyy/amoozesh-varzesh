import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    position: "top-right",
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.45,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: true,
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true,
    bodyClassName: ["toast__body"],
  };

  nuxtApp.vueApp.use(Toast, options);
});

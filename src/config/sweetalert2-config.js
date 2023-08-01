import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const opts = {
  // focusCancel: false,
  // confirmButtonColor: "blue",
  // cancelButtonColor: "white",
  // confirmButtonText: "確定",
  // cancelButtonText: "取消",
};

Vue.use(VueSweetalert2, opts);

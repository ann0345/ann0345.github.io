import Vue from "vue";

export default {
  methods: {
    formatMoney(val = 0, currency = "NTD") {
      const currencyToPrecision = {
        NTD: 0,
        JPY: 0,
        USD: 2,
        EUR: 2,
      };
      const precision = currencyToPrecision[currency];
      if (!val) {
        return val;
      } else {
        return Number(val).toLocaleString(undefined, {
          minimumFractionDigits: precision,
          maximumFractionDigits: precision,
        });
      }
    },
    // showLoader(title = "Loading data...") {
    //   return Vue.swal({
    //     title,
    //     allowOutsideClick: false,
    //     allowEscapeKey: false,
    //     didOpen: () => {
    //       Vue.swal.showLoading();
    //     },
    //   });
    // },
    // hideLoader() {
    //   Vue.swal.close();
    // },
  },
};

import Vue from "vue";
import moment from "moment";

export default {
  methods: {
    formatMoney(v = 0, currency = "NTD") {
      const currencyToPrecision = {
        NTD: 0,
        JPY: 0,
        USD: 2,
        EUR: 2,
      };
      const precision = currencyToPrecision[currency];
      if (!v) {
        return v;
      } else {
        return Number(v).toLocaleString(undefined, {
          minimumFractionDigits: precision,
          maximumFractionDigits: precision,
        });
      }
    },
    formatTillMonth(v) {
      let date = moment(v, "YYYYMMDD");
      if (!date.isValid()) return v;
      return moment(date).format("MMM. YYYY");
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

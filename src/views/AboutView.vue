<template>
  <v-app>
    <v-container>
      <v-data-table :headers="headers" :items="userData">
        <template></template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  async mounted() {
    this.isLoading = true;
    await this.fetchData();
    this.isLoading = false;
  },
  data() {
    return {
      headers: [
        {
          text: "ID",
          value: "id",
          align: "center",
          sortable: true,
        },
        {
          text: "姓名",
          value: "name",
          align: "left",
          sortable: true,
        },
        {
          text: "電話",
          value: "phoneNum",
          align: "left",
          sortable: false,
        },
        {
          text: "餘額",
          value: "balance",
          align: "right",
          sortable: true,
        },
      ],
      items: [
        {
          id: "A123456789",
          name: "陳O影",
          phoneNum: "0988555669",
          balance: 12345,
        },
        {
          id: "B225558979",
          name: "張O方",
          phoneNum: "0911357786",
          balance: 580,
        },
        {
          id: "R122669852",
          name: "王O資",
          phoneNum: "0945339780",
          balance: 99641300,
        },
      ],
    };
  },
  computed: {
    ...mapState(["userData"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
};
</script>

<style lang="scss" scoped></style>

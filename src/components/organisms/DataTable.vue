<template>
  <v-app>
    <v-container>
      <span>Fake data below</span>
      <Pagination
        v-model="options"
        :totalCount="totalCount"
        :pageCount="pageCount"
      ></Pagination>
      <v-data-table
        :headers="headers"
        :items="dataTableItems"
        height="600"
        fixed-header
        hide-default-footer
        page.sync="page"
        :options.sync="options"
        sort-by="name"
        :items-per-page="itemsPerPage"
        @page-count="pageCount = $event"
        class="forDataTable"
      >
        <template v-slot:item.index="{ item, index }">
          {{ (options.page - 1) * options.itemsPerPage + index + 1 }}
        </template>
        <template v-slot:item.balance="{ item }">
          {{ formatMoney(item.balance, item.currency) }}
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "DataTableComponent",
  components: {
  },
  mounted() {
    this.doQryDefaultData();
  },
  data() {
    return {
      headers: [
        {
          text: "序",
          value: "index",
          align: "center",
          sortable: false,
          width: "8%",
        },
        {
          text: "ID",
          value: "id",
          align: "left",
          sortable: false,
          width: "15%",
        },
        {
          text: "姓名",
          value: "name",
          align: "left",
          sortable: true,
          width: "20%",
        },
        {
          text: "餘額",
          value: "balance",
          align: "right",
          sortable: false,
          width: "15%",
        },
        {
          text: "幣別",
          value: "currency",
          align: "left",
          sortable: true,
          width: "12%",
        },
        {
          text: "電話",
          value: "phoneNum",
          align: "left",
          sortable: false,
          width: "15%",
        },
        {
          text: "信箱",
          value: "email",
          align: "left",
          sortable: true,
          width: "15%",
        },
      ],
      page: 1,
      pageCount: 0,
      itemsPerPage: 20,
      options: {},
    };
  },
  computed: {
    ...mapState("dataTable", ["dataTableItems"]),
    ...mapGetters("dataTable", ["totalCount"]),
  },
  watch: {},
  methods: {
    ...mapActions("dataTable", ["fetchDataTable"]),
    async doQryDefaultData() {
      await this.fetchDataTable();
    },
  },
};
</script>

<style lang="scss" scoped></style>

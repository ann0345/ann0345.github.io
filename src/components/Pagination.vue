<template>
  <v-row class="pb-2">
    <v-col col="12" sm="12" md="12" lg="2" class="totalCountText">
      <span>總筆數: {{ totalCount }} 筆</span>
    </v-col>
    <v-col col="12" sm="12" md="6" lg="6" class="text-center">
      <v-pagination
        v-model="page"
        :length="pageCount"
        class="py-0"
      ></v-pagination>
    </v-col>
    <v-col col="12" sm="12" md="6" lg="4" class="perPageText">
      <v-row>
        <span>每頁顯示&nbsp; </span>
        <span>
          <v-select
            v-model="paginationSelect"
            :items="paginationMode"
            @change="onSelectItemsPerPage"
            class="pageSelect"
            hide-details
          ></v-select>
        </span>
        <span>&nbsp; 筆</span>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    totalCount: {
      type: Number,
    },
    pageCount: {
      type: Number,
      default: 0,
    },
    value: {
      type: Object,
      default: () => ({
        page: 1,
        itemsPerPage: 20,
      }),
    },
    paginationMode: {
      type: Array,
      default: () => [10, 20, 30],
    },
  },
  data() {
    return {};
  },
  created() {
    this.paginationSelect = 20;
  },
  computed: {
    paginationSelect: {
      get() {
        return this.value.itemPerPage;
      },
      set(value) {
        this.$set(this.value, "itemsPerPage", value);
        this.$set(this.value, "page", 1);
      },
    },
    page: {
      get() {
        return this.value.page;
      },
      set(value) {
        this.$emit("input", { ...this.value, page: value });
      },
    },
  },
  methods: {
    reset() {
      this.paginationSelect = 20;
    },
    onSelectItemsPerPage(value) {
      this.$emit("input", { ...this.value, itemsPerPage: value });
    },
  },
};
</script>

<style lang="scss" scoped>
.totalCountText {
  text-align: left;
  align-self: self-end;
}
.pageSelect {
  border: 1px solid;
  margin-top: 0px;
  padding-top: 0px;
}
.perPageText {
  text-align: right;
  align-self: self-end;
  padding-bottom: 20px;
  .row {
    justify-content: right;
    padding-right: 24px;
  }
  span {
    align-self: center;
    padding-bottom: 4px;
  }
}
</style>

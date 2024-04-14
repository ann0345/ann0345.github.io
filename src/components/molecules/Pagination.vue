<template>
  <v-row class="pb-4">
    <v-col col="12" xs="12" sm="12" md="4" lg="3" class="totalCountText">
      <span>總筆數: {{ totalCount }} 筆</span>
    </v-col>
    <v-col col="12" xs="12" sm="12" md="4" lg="6" class="text-center">
      <v-pagination
        v-model="page"
        :length="pageCount"
        class="pa-0"
      ></v-pagination>
    </v-col>
    <v-col col="12" xs="12" sm="12" md="4" lg="3" class="perPageText">
      <v-row>
        <span>每頁顯示&nbsp; </span>
        <span>
          <v-select
            v-model="paginationSelect"
            :items="paginationMode"
            @change="onSelectItemsPerPage"
            class="pageSelect"
            hide-details
            solo
            dense
          ></v-select>
        </span>
        <span>&nbsp; 筆</span>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Pagination",
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
      default: () => [10, 20, 30, 40, 50],
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
        return this.value.itemsPerPage;
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
  width: 100px;
}
@media (min-width: 910px) {
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
      .v-input__control {
        min-height: 36px;
      }
    }
  }
}
@media (max-width: 1250px) {
  .totalCountText {
    text-align: center;
  }
  .perPageText {
    .row {
      justify-content: center;
    }
  }
}
</style>

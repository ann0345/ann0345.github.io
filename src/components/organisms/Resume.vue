<template>
  <v-app>
    <v-container>
      <v-card class="vcard">
        <v-card-title class="text-h4">技能</v-card-title>
        <v-divider class="mb-2"></v-divider>
        <v-row>
          <v-col col="12" sm="12" md="4" lg="4">
            <UnorderedList
              v-model="list"
              subTitle="程式/網頁設計語言"
            ></UnorderedList>
          </v-col>
          <v-col col="12" sm="12" md="4" lg="4">
            <UnorderedList
              v-model="list"
              subTitle="開發/專案工具"
            ></UnorderedList>
          </v-col>
          <v-col col="12" sm="12" md="4" lg="4">
            <UnorderedList
              v-model="list"
              subTitle="文書/影音軟體"
            ></UnorderedList>
          </v-col>
        </v-row>
      </v-card>
      <br />
      <v-card class="vcard">
        <v-card-title class="text-h4">工作經歷</v-card-title>
        <v-divider class="mb-2"></v-divider>
        <Timeline v-model="items"></Timeline>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Timeline from "../molecules/Timeline";
import UnorderedList from "../molecules/UnorderedList";
export default {
  components: {
    Timeline,
    UnorderedList,
  },
  mounted() {},
  data() {
    return {
      list: [
        { id: "123456789", name: "選項 1" },
        { id: "234567890", name: "選項 2" },
        { id: "345678901", name: "選項 3" },
      ],
      items: [
        {
          company: "company",
          title: "123456789",
          fromMonth: "202010",
          toMonth: "202110",
          summery: "選項 1",
          detail: "2222",
        },
        {
          company: "company2",
          title: "123456789",
          fromMonth: "202010",
          toMonth: "202110",
          summery: "選項 2",
          detail: "333",
        },
      ],
    };
  },
  computed: {
    // ...mapState("dataTable", ["dataTableItems"]),
    // ...mapGetters("dataTable", ["totalCount"]),
  },
  watch: {},
  methods: {
    // ...mapActions("dataTable", ["fetchDataTable"]),
  },
};
</script>

<style lang="scss" scoped>
.vcard {
  border: 1px solid;
  background-color: $bg-color !important;
}
</style>

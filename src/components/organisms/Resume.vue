<template>
  <v-app>
    <v-container>
      <v-card class="vcard">
        <v-card-title class="text-h4">技能</v-card-title>
        <v-divider class="mb-2"></v-divider>
        <v-row class="pl-8">
          <v-col col="12" sm="12" md="4" lg="4">
            <UnorderedList
              v-model="skillGroup1"
              subTitle="程式/網頁設計語言"
              :titleIcon="'mdi-file-code'"
              :havePaddingY="false"
            ></UnorderedList>
          </v-col>
          <v-col col="12" sm="12" md="4" lg="4">
            <UnorderedList
              v-model="skillGroup2"
              subTitle="開發/專案工具"
              :titleIcon="'mdi-source-branch'"
              :havePaddingY="false"
            ></UnorderedList>
          </v-col>
          <v-col col="12" sm="12" md="4" lg="4">
            <UnorderedList
              v-model="skillGroup3"
              subTitle="文書/影音軟體"
              :titleIcon="'mdi-movie-open-edit'"
              :havePaddingY="false"
            ></UnorderedList>
          </v-col>
        </v-row>
      </v-card>
      <br />
      <v-card class="vcard">
        <v-card-title class="text-h4">
          工作經歷
          <SwitchVuetify
            v-model="positionCenter"
            label="Timeline set centered"
            inset
            class="pl-4"
            :false-value="false"
            :true-value="true"
          ></SwitchVuetify>
        </v-card-title>
        <v-divider class="mb-2"></v-divider>
        <Timeline v-model="workExp" :positionCenter="positionCenter"></Timeline>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ResumeComponent",
  components: {},
  mounted() {
    this.fetchResume();
  },
  data() {
    return {
      positionCenter: true,
    };
  },
  computed: {
    ...mapState("resume", [
      "skillGroup1",
      "skillGroup2",
      "skillGroup3",
      "workExp",
    ]),
  },
  watch: {},
  methods: {
    ...mapActions("resume", ["fetchResume"]),
  },
};
</script>

<style lang="scss" scoped>
.vcard {
  border: 1px solid;
  background-color: var(--bg-color) !important;
}
</style>

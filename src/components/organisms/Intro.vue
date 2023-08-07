<template>
  <v-app>
    <v-container class="vContainer">
      <v-card>
        <v-row>
          <v-col col="12" sm="12" md="12" lg="4">
            <img alt="Vue logo" src="src/assets/logo.png" />
          </v-col>
          <v-col col="12" sm="12" md="12" lg="8" class="doc">
            <v-row class="text-h4">陳品蓉</v-row>
            <v-row style="font-size:20px;"
              >中國人壽 前端工程師 ChinaLife Frontend Engineer</v-row
            >
            <v-row class="pb-2">
              <span class="pr-2"
                ><i class="fa-brands fa-linkedin fa-2xl"></i
              ></span>
              <span><i class="fa-solid fa-envelope fa-2xl"></i></span>
            </v-row>
            <v-row>
              <span class="pr-2"
                ><i class="fa-solid fa-graduation-cap fa-xl"></i
              ></span>
              國立中山大學 資訊管理學系</v-row
            >
            <v-row>
              <span class="pr-3 pl-1"><i class="fa-solid fa-check fa-xl"></i></span>
              個性開朗、獨立自主，具備解決問題的能力，喜愛事情有所規劃，並對手上的事情負責。</v-row
            >
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "IntroComponent",
  mounted() {},
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
.vContainer {
  width: 65%;
  .v-card {
    border: 1px solid;
    background-color: $bg-color !important;
    padding: 50px;
  }
}
.doc {
  .row {
    margin-bottom: 0px;
  }
}
</style>

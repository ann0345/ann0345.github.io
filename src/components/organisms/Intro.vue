<template>
  <v-app>
    <v-container class="vContainer">
      <v-card>
        <v-row>
          <v-col col="12" sm="12" md="12" lg="4" class="py-0">
            <img class="selfPic" alt="selfPic" :src="imagePath" />
          </v-col>
          <v-col col="12" sm="12" md="12" lg="8" class="doc">
            <v-row class="text-h4">陳品蓉</v-row>
            <v-row style="font-size: 22px"
              >中國人壽 前端工程師 ChinaLife Frontend Engineer</v-row
            >
            <v-row class="pb-2">
              <a
                href="https://www.linkedin.com/in/chenpinjung/"
                target="_blank"
                rel="noopener noreferrer"
                class="pr-2"
              >
                <i class="fa-brands fa-linkedin fa-xl"></i>
              </a>
              <a
                href="mailto:a23010324@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="pr-2"
                ><i class="fa-solid fa-envelope fa-xl"></i
              ></a>
              <a
                href="https://github.com/ann0345/personalwork"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="fa-brands fa-github fa-xl"></i
              ></a>
            </v-row>
            <v-row style="font-size: 20px">
              <span class="pr-2">
                <i class="fa-solid fa-graduation-cap fa-xl"></i
              ></span>
              國立中山大學 資訊管理學系</v-row
            >
            <v-row style="font-size: 20px">
              <span class="pr-3 pl-1"
                ><i class="fa-solid fa-check fa-xl"></i
              ></span>
              個性開朗、獨立自主，具備解決問題的能力</v-row
            >
            <v-row style="font-size: 20px">
              <span class="pr-3 pl-1"
                ><i class="fa-solid fa-check fa-xl"></i
              ></span>
              喜愛事情有所規劃，並對手上的事情負責</v-row
            >
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
import imagePath from "@/assets/racoon.png";
export default {
  name: "IntroComponent",
  mounted() {},
  data() {
    return {
      positionCenter: true,
      imagePath: imagePath,
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.vContainer {
  margin-top: 50px;
  width: 65%;
  .v-card {
    border: 1px solid;
    background-color: $bg-color !important;
    padding: 50px;
  }
}
.doc {
  .row {
    margin-top: 4px;
    margin-bottom: 0px;
  }
}
.selfPic {
  width: -webkit-fill-available;
  padding-right: 12px;
  border-radius: 20%;
}
</style>

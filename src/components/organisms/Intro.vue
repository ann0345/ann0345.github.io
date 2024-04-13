<template>
  <v-app>
    <v-container class="vContainer">
      <v-card>
        <v-row>
          <v-col col="12" xs="12" sm="12" md="12" lg="4" class="py-0">
            <img class="selfPic" alt="selfPic" :src="imagePath" />
          </v-col>
          <v-col col="12" xs="12" sm="12" md="12" lg="8" class="doc">
            <v-row class="text-h4"><v-col>陳品蓉</v-col></v-row>
            <v-row style="font-size: 20px">
              <v-col xs="12" sm="12" md="12" lg="4">凱基人壽 前端工程師</v-col>
              <v-col xs="12" sm="12" md="12" lg="8"
                >KgiLife Frontend Engineer</v-col
              >
            </v-row>
            <v-row class="pb-2">
              <v-col>
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
              </v-col>
            </v-row>
            <v-row style="font-size: 20px">
              <v-col xs="12" sm="12" md="1" lg="1">
                <i class="fa-solid fa-graduation-cap fa-xl"></i>
              </v-col>
              <v-col xs="12" sm="12" md="11" lg="11">
                國立中山大學 資訊管理學系</v-col
              ></v-row
            >
            <v-row style="font-size: 20px">
              <v-col xs="12" sm="12" md="1" lg="1">
                <i class="fa-solid fa-check fa-xl"></i>
              </v-col>
              <v-col xs="12" sm="12" md="11" lg="11">
                個性開朗、獨立自主，具備解決問題的能力</v-col
              ></v-row
            >
            <v-row style="font-size: 20px">
              <v-col xs="12" sm="12" md="1" lg="1">
                <i class="fa-solid fa-check fa-xl"></i
              ></v-col>
              <v-col xs="12" sm="12" md="11" lg="11">
                喜愛事情有所規劃，並對手上的事情負責</v-col
              ></v-row
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
  width: 85%;
  .v-card {
    border: 1px solid;
    background-color: var(--bg-color) !important;
    padding: 28px;
  }
}
.doc {
  .row {
    .col {
      padding: 0px;
    }
  }
}
.selfPic {
  width: -webkit-fill-available;
  padding-right: 12px;
  border-radius: 20%;
}
@media (min-width: 800px) {
  .vContainer {
    margin-top: 50px;
    width: 65%;
  }
  .doc {
    .row {
      .col {
        text-align: start;
      }
    }
  }
}
</style>

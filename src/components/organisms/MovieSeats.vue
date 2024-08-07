<template>
  <v-container class="selectSection" fluid>
    <v-card class="mt-5 mb-8 cardClass">
      <v-row class="mb-12" no-gutters>
        <v-col cols="12" sm="12" md="8" class="text-start">
          <span class="titleClass">請選擇觀看電影的座位</span>
        </v-col>
      </v-row>

      <v-row justify="center" class="mb-6" no-gutters>
        <v-col
          cols="auto"
          v-for="(item, index) in legendItems"
          :key="index"
          class="ml-2"
        >
          <div class="d-flex align-center">
            <div :class="['stright', item.class]"></div>
            <span style="font-size: initial">{{ item.label }}</span>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center" class="mb-8" no-gutters>
        <v-col cols="auto">
          <v-sheet
            width="472"
            class="d-flex align-center justify-center pa-1 screen"
          >
            <span style="font-size: initial">螢幕</span>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row
        justify="center"
        v-for="row in 10"
        :key="row"
        class="mb-2"
        no-gutters
      >
        <v-col cols="auto" v-for="stright in 16" :key="`${row}-${stright}`">
          <div
            :class="[
              'stright',
              getAisleSeat(stright),
              getSeatStatus(row, stright),
            ]"
            @click="selectSeat(row, stright)"
          ></div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectedSeat: null,
    soldSeats: [
      { row: 6, stright: 8 },
      { row: 6, stright: 9 },
      { row: 7, stright: 8 },
      { row: 7, stright: 9 },
      { row: 7, stright: 10 },
      { row: 7, stright: 11 },
      { row: 7, stright: 12 },
      { row: 7, stright: 13 },
      { row: 8, stright: 4 },
      { row: 8, stright: 5 },
      { row: 8, stright: 6 },
      { row: 8, stright: 7 },
      { row: 8, stright: 8 },
    ],
    legendItems: [
      { class: "sampleSelected", label: "您的座位" },
      { class: "sampleAvailable", label: "未售出" },
      { class: "sampleSold", label: "已售出" },
    ],
    aisleSeatNum: [3, 13],
  }),
  methods: {
    isSeatSold(row, stright) {
      return this.soldSeats.some((s) => s.row === row && s.stright === stright);
    },
    getAisleSeat(stright) {
      if (this.aisleSeatNum.includes(stright)) return "aisleSeat";
      return "";
    },
    getSeatStatus(row, stright) {
      if (this.isSeatSold(row, stright)) return "sold";
      if (
        this.selectedSeat &&
        this.selectedSeat.row === row &&
        this.selectedSeat.stright === stright
      )
        return "selected";
      return "available";
    },
    selectSeat(row, stright) {
      if (!this.isSeatSold(row, stright)) {
        this.selectedSeat = { row, stright };
      }
    },
  },
};
</script>

<style scoped>
.selectSection {
  max-width: 50%;
  margin: auto;
  border: 3px solid #dddddd;
  background-color: white;
}
.cardClass {
  max-width: fit-content;
  margin: auto;
  box-shadow: none !important;
}
.titleClass {
  font-size: 1.3rem;
}
.sampleSelected {
  background-color: #1a604b;
  border-color: #1a604b !important;
}
.sampleAvailable {
  background-color: white;
  border: 1px solid #dddddd;
}
.sampleSold {
  background-color: #dddddd;
}
.screen {
  border: 2px solid #dddddd;
}
.stright {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin: 4px;
  cursor: pointer;
  border: 2px solid #dddddd;
}
.stright.available {
  background-color: white;
}
.stright.selected {
  background-color: #15964e;
  border-color: #15964e;
}
.stright.sold {
  background-color: #dddddd;
  cursor: not-allowed;
}
.aisleSeat {
  margin-right: 20px;
}
</style>

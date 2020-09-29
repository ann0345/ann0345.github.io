<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        {{ cityCode }}
        <v-select
          v-model="cityCode"
          :items="cities"
          item-value="code"
          item-text="name"
          outlined
          dense
        >
        </v-select>
      </v-col>
      <v-col cols="6">
        {{ regionCode }}
        <v-select
          v-model="regionCode"
          :items="regions"
          item-value="code"
          item-text="name"
          outlined
          dense
        >
        </v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import zip from "../zip.json";

export default {
  data: () => ({
    zip,
    cityCode: 100,
    regionCode: 0
  }),
  watch:{
    cityCode:{
      handler() {
        this.regionCode = this.regions[0].code;
      },
      immediate: true,
    },
  },
  computed:{
    cities(){
      return this.zip.cities;
    },
    regions(){
      const selected = this.cities.find(elm => elm.code === this.cityCode);
      return selected.region;
    }
  }
};
</script>

<style scoped>
</style>
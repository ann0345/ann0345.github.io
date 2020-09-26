<template>
  <div>
    {{ cityCode }}
    <select v-model="cityCode">
      <option
        v-for="city in cities"
        :key="city.code"
        :value="city.code"
      >
        {{ city.name }}
      </option>
    </select>
    {{ regionCode }}
    <select v-model="regionCode">
      <option
        v-for="region in regions"
        :key="region.code"
        :value="region.code"
      >
        {{ region.name }}
      </option>
    </select>
  </div>
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
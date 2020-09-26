<template>
  <div>
    <div v-if="zip">
      {{ cityCode }}
      <select v-model="cityCode">
        <option v-for="city in cities" :key="city.code" :value="city.code">
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
    <div v-else>loading...</div>
    <!-- <button @click="getData">get</button> -->
  </div>
</template>

<script>

export default {
  mounted(){
    this.getData();
  },
  data: () => ({
    zip: null,
    cityCode: 0,
    regionCode: 0,
  }),
  computed: {
    cities() {
      return this.zip ? this.zip.cities : [];
    },
    regions() {
      const selected = this.cities.find((elm) => elm.code === this.cityCode);
      return selected ? selected.region : [];
    },
  },
  watch: {
    cities() {
      const city = this.cities[0];
      this.cityCode = city ? city.code : 0;
    },
    regions() {
      const region = this.regions[0];
      this.regionCode = region ? region.code : 0;
    },
  },
  methods: {
    async getData() {
      const result = await fetch("http://10.2.1.46");
      const zip = await result.json();
      this.zip = zip;
    },
  },
};
</script>

<style scoped>
</style>
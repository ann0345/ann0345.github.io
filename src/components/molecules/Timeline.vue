<template>
  <v-container>
    <v-timeline
      :reverse="true"
      :dense="$vuetify.breakpoint.smAndDown"
      v-if="positionCenter"
    >
      <v-timeline-item v-for="(item, index) in value" :key="item.company">
        <span slot="opposite"
          >{{ formatTillMonth(item.fromMonth) }} -
           {{ formatTillMonth(item.toMonth) }}</span
        >
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            {{ item.company }} - {{ item.title }}
          </v-card-title>
          <v-card-text>
            <p class="summery">{{ item.summery }}</p>
            <span class="detail">{{ item.detail }}</span>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-timeline dense v-else>
      <v-timeline-item v-for="(item, index) in value" :key="item.company">
        <v-card class="timelineCard">
          <v-card-title class="text-h5">
            {{ item.company }} - {{ item.title }} ({{ item.fromMonth }}-{{
              item.toMonth
            }})</v-card-title
          >
          <v-card-text class="talign-start">
            <p class="summery">{{ item.summery }}</p>
            <span class="detail">{{ item.detail }}</span>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "TimelineComponent",
  props: {
    value: {
      type: Array,
    },
    positionCenter: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scope>
.timelineCard {
  background-color: lightgrey;
}
.summery {
  font-size: 22px;
}
.detail {
  font-size: 20px;
  padding-left: 20px;
}
</style>

<template>
  <v-container>
    <v-timeline
      :reverse="true"
      :dense="$vuetify.breakpoint.smAndDown"
      v-if="positionCenter"
    >
      <v-timeline-item v-for="item in value" :key="item.company">
        <span slot="opposite" class="onBoardTime"
          >{{ formatTillMonth(item.fromMonth) }} -
          {{ formatTillMonth(item.toMonth) }}</span
        >
        <v-card class="elevation-2">
          <v-card-title class="cardTitle">
            {{ item.company }} - {{ item.title }}
          </v-card-title>
          <v-card-text class="cardText">
            <p>{{ item.summery }}</p>
            <span v-if="item.detailList">
              <UnorderedList v-model="item.detailList"></UnorderedList>
            </span>
            <span v-else></span>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-timeline dense v-else>
      <v-timeline-item v-for="item in value" :key="item.company">
        <v-card class="elevation-2">
          <v-card-title class="cardTitle">
            {{ item.company }} - {{ item.title }}
            <span class="onBoardTime pl-2">
              ({{ formatTillMonth(item.fromMonth) }} -
              {{ formatTillMonth(item.toMonth) }})
            </span>
          </v-card-title>
          <v-card-text class="cardText">
            <p>{{ item.summery }}</p>
            <span v-if="item.detailList">
              <UnorderedList v-model="item.detailList"></UnorderedList>
            </span>
            <span v-else></span>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "Timeline",
  components: {
  },
  props: {
    value: {
      type: Array,
    },
    positionCenter: {
      type: Boolean,
      default: false,
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
.cardTitle {
  font-size: 22px;
  background-color: var(--th-color);
  word-break: break-word;
}
.cardText {
  padding-top: 16px !important;
  background-color: var(--td-color);
  word-break: break-word;
  p {
    color: var(--p--color);
    font-size: 20px;
    text-align: start;
    margin-bottom: 0px !important;
  }
  span {
    color: var(--span--color);
  }
}
.onBoardTime {
  font-size: 20px;
  color: var(--span--color);
}
</style>

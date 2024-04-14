<template>
  <v-app>
    <v-container>
      <v-card class="vcard">
        <v-card-title class="text-h4">textfield</v-card-title>
        <v-row>
          <v-col md="2">
            <TextFieldVuetify
              v-model="text1"
              hideDetails
              dense
            ></TextFieldVuetify>
          </v-col>
          <v-col md="2">
            <TextFieldVuetify
              v-model="text2"
              dense
              outlined
              counter
            ></TextFieldVuetify>
          </v-col>
          <v-col md="2">
            <TextFieldVuetify
              v-model="text3"
              dense
              outlined
              disabled
            ></TextFieldVuetify>
          </v-col>
          <v-col md="2">
            <TextFieldVuetify
              v-model="text5"
              outlined
              :prefix="'前'"
              :suffix="'後'"
            ></TextFieldVuetify>
          </v-col>
          <v-col md="2">
            <TextFieldVuetify
              v-model="text4"
              title="自訂檢核"
              placeholder="請輸入"
              dense
              outlined
              :rules="rule.text4"
            ></TextFieldVuetify>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card-title class="text-h4">radioGroup</v-card-title>
        <v-row>
          <v-col md="1">
            <RadioGroupVuetify
              v-model="radioOption1"
              title="直行"
              :options="selection2"
              item-text="label"
              item-value="value"
            ></RadioGroupVuetify>
          </v-col>
          <v-col md="3">
            <RadioGroupVuetify
              v-model="radioOption2"
              title="橫列"
              :options="selection1"
              row
            ></RadioGroupVuetify>
          </v-col>
          <v-col md="2">
            <RadioGroupVuetify
              v-model="radioOption3"
              title="反灰"
              :options="selection1"
              disabled
              hideDetails
            ></RadioGroupVuetify>
          </v-col>
          <v-col md="2">
            <RadioGroupVuetify
              v-model="radioOption4"
              title="自訂檢核"
              :options="selection1"
              :rules="rule.radioOption4"
            ></RadioGroupVuetify>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card-title class="text-h4">autocomplete</v-card-title>
        <v-row>
          <v-col md="2">
            <AutocompleteVuetify
              title="模糊搜尋自訂變色"
              v-model="autoComplete1"
              :items="selection2"
            ></AutocompleteVuetify>
          </v-col>
          <v-col md="2">
            <AutocompleteVuetify
              v-model="autoComplete2"
              title="預設反灰"
              :items="selection2"
              dense
              outlined
              disabled
            ></AutocompleteVuetify>
          </v-col>
          <v-col md="2">
            <AutocompleteVuetify
              title="自訂檢核"
              v-model="autoComplete3"
              :items="selection2"
              dense
              outlined
              :rules="rule.autoComplete3"
            ></AutocompleteVuetify>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "PlaygroundComponent",
  components: {
  },
  mounted() {
  },
  data() {
    return {
      text1: "hideDetails",
      text2: "dense outlined counter",
      text3: "disabled",
      text4: "",
      text5: "no dense",
      selection1: ["opt1","opt2","opt3"],
      selection2: [{label: "apple", value: "opt1"},
      {label: "guava", value: "opt2"},
      {label: "orange", value: "opt3"}],
      radioOption1: "opt2",
      radioOption2: "opt2",
      radioOption3: "opt2",
      radioOption4: "",
      autoComplete1: "opt2",
      autoComplete2: "opt3",
      autoComplete3: "opt1",
      rule: {
        text4: [v => !!v || "請輸入內容"],
        radioOption4: [v => !v || v === "opt1" || "請選opt1"],
        autoComplete3: [v => !v || v === "opt1" || "請選opt1"],
      }
    };
  },
  computed: {
  },
  watch: {},
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.vcard {
  border: 1px solid;
  background-color: var(--bg-color) !important;
}
</style>

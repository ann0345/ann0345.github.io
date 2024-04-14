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
              title="計數器字數控制"
              dense
              outlined
              counter
              :maxlength="25"
            ></TextFieldVuetify>
          </v-col>
          <v-col md="2">
            <TextFieldVuetify
              v-model="text3"
              title="預設反灰"
              dense
              outlined
              disabled
            ></TextFieldVuetify>
          </v-col>
          <v-col md="2">
            <TextFieldVuetify
              v-model="text5"
              title="前後綴"
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
        <v-card-title class="text-h4">textArea</v-card-title>
        <v-row>
          <v-col md="2">
            <TextareaVuetify
              v-model="textarea1"
              title="可調整大小"
              placeholder="请输入內容"
              outlined
            ></TextareaVuetify>
          </v-col>
          <v-col md="2">
            <TextareaVuetify
              v-model="textarea2"
              title="預設反灰"
              :rows="5"
              outlined
              disabled
              no-resize
            ></TextareaVuetify>
          </v-col>
          <v-col md="2">
            <TextareaVuetify
              title="限制輸入上限"
              v-model="textarea3"
              dense
              outlined
              counter
              :maxlength="10"
            ></TextareaVuetify>
          </v-col>
          <v-col md="2">
            <TextareaVuetify
              title="自訂檢核"
              v-model="textarea4"
              dense
              outlined
              counter
              :rows="2"
              :rules="rule.textarea4"
            ></TextareaVuetify>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card-title class="text-h4">chip</v-card-title>
        <v-row class="my-4">
            <ChipVuetify
              :title="chip1"
              :icon="chipIcon"
              elevated
              class="pr-2"
            ></ChipVuetify>
            <ChipVuetify
              :title="chip2"
              :icon="chipIcon"
              tonal
              rightIcon
              class="pr-2"
            ></ChipVuetify>
            <ChipVuetify
              :title="chip3"
              class="pr-2"
            ></ChipVuetify>
            <ChipVuetify
              :title="chip4"
              color="success"
              outlined
              class="pr-2"
            ></ChipVuetify>
            <ChipVuetify
              :title="chip5"
              textColor="primary"
            ></ChipVuetify>
        </v-row>
        <v-divider></v-divider>
        <v-card-title class="text-h4">switch</v-card-title>
        <v-row>
          <v-col md="2">
            <SwitchVuetify
              v-model="switch2"
              label="default"
              :false-value="false"
              :true-value="true"
            ></SwitchVuetify>
            <SwitchVuetify
              v-model="switch1"
              label="inset"
              inset
              :false-value="false"
              :true-value="true"
            ></SwitchVuetify>
          </v-col>
          <v-col md="2">
            <SwitchVuetify
              v-model="switch3"
              color="primary"
              label="primary"
              inset
              :false-value="false"
              :true-value="true"
            ></SwitchVuetify>
            <SwitchVuetify
              v-model="switch4"
              color="warning"
              label="warning"
              inset
              :false-value="false"
              :true-value="true"
            ></SwitchVuetify>

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
      text2: "custom maxlength",
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
      textarea1: "這裡有內容",
      textarea2: "固定高度不可調整",
      textarea3: "最多只能輸入10個字",
      textarea4: "不要超過5",
      chip1: "leftIcon",
      chip2: "rightIcon",
      chip3: "default",
      chip4: "success",
      chip5: "primary",
      chipIcon: "mdi-movie-open-edit",
      switch1: true,
      switch2: false,
      switch3: true,
      switch4: true,
      rule: {
        text4: [v => !!v || "請輸入內容"],
        radioOption4: [v => !v || v === "opt1" || "請選opt1"],
        autoComplete3: [v => !!v || "此欄位必填"],
        textarea4: [v => v.length < 6 || "請勿輸入超過5個字"],
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
.row {
	margin: -12px 8px;
}
</style>

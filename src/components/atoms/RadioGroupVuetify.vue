<template>
<div>
  <div class="inputTitle">
    {{ title }}
  </div>
  <v-radio-group
    v-model="localValue"
    :row="row"
    :label="label"
    :error="error"
    :rules="rules"
    :disabled="disabled"
    :hide-details="hideDetails"
    :error-messages="errorMessages"
  >
    <v-radio
      v-for="opt in targetOpts"
      :key="opt.value"
      :label="opt.text"
      :value="opt.value"
    >
    <template v-slot:label>
      <div>{{ opt.text }}</div>
    </template>
    </v-radio>
  </v-radio-group>
</div>
</template>

<script>
export default {
  name: "RadioGroupVuetify",
  props: {
    value: [String, Number],
    title: String,
    label: String,
    options: Array,
    itemText: {
      type: String,
      default: "label",
    },
    itemValue: {
      type: String,
      default: "value",
    },
    row: Boolean,
    disabled: Boolean,
    hideDetails: Boolean,
    error: Boolean,
    errorMessages: [String, Array],
    rules: [String, Array],
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    targetOpts() {
      return this.options.map(opt => {
        if (typeof opt === "object") {
          return {
            text: opt[this.itemText],
            value: opt[this.itemValue],
          };
        } else {
          return {
            text: opt,
            value: opt
          };
        }
      });
    },
  },
}
</script>
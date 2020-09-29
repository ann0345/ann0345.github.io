<template>
<v-form @submit.prevent="add">
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-text-field v-model="text" outlined dense hide-details></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-btn :disabled="invalid" type="submit">add</v-btn>
      </v-col>
    </v-row>
  </v-container>
</v-form>
</template>

<script>
export default {
  data: () => ({
    text: "",
  }),
  computed:{
    invalid(){
      return this.text.length <= 0 || this.text.length > 10;
    }
  },
  methods: {
    add() {
      if(this.invalid) return;
      this.$emit('content', this.text);
      this.text = "";
    }
  },
};
</script>

<style scoped>
</style>
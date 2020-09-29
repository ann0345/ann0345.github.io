<template>
  <v-dialog v-model="dialog" width="400">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on">new</v-btn>
    </template>
    <v-card>
      <v-card-text>
        <v-form @submit.prevent="submit">
          <v-text-field v-model="name" label="name"></v-text-field>
          <v-text-field v-model="email" label="email"></v-text-field>
          <v-radio-group v-model="gender" label="gender">
            <v-radio value="M" label="M"></v-radio>
            <v-radio value="F" label="F"></v-radio>
          </v-radio-group>
          <v-text-field v-model.number="age" label="age"></v-text-field>
          <v-btn type="submit">submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
data: () => ({
  name: "",
  email: "",
  gender: "F",
  age: "",
  dialog: false,
}),
methods:{
  submit(){
    const person = {
      name: this.name,
      email: this.email,
      gender: this.gender,
      age: this.age,
    };
    this.$emit("input", person);
    this.dialog = false;
  }
}
}
</script>

<style>

</style>
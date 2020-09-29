<template>
  <v-container>
    <v-data-table
      :headers="header"
      :items="people"
      dense
    >
      <template #[`item.picture`]="{value}">
        <v-avatar>
          <v-img :src="value"></v-img>
        </v-avatar>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import people from '../people.json';

// const header = [
//   {value: "gender", text: "gender"},
//   {value: "name", text: "name"},
//   {value: "country", text: "country"},
//   {value: "email", text: "email"},
//   {value: "age", text: "age"},
//   {value: "picture", text: "picture"}
// ]

export default {
  data: () => ({
    people,
    // header,
  }),
  computed:{
    header(){
      return [
        { text:"照片", value: "picture" },
        { text:"姓名", value: "name" },
        { text:"郵件", value: "email" },
        { text:"性別", value: "gender" },
        { text:"國家", value: "country" },
        { text:"年齡", value: "age" },
      ]
    }
  }
}
</script>

<style>

</style>
<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>123</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title> 123 </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item @click="page='todo';drawer=false">
          <v-list-item-content>
            <v-list-item-title> Todo </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="page='city';drawer=false">
          <v-list-item-content>
            <v-list-item-title> City </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="page='pic';drawer=false">
          <v-list-item-content>
            <v-list-item-title> Pic </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <Todo v-if="page === 'todo'" />
      <City v-if="page === 'city'" />
      <Pic v-if="page === 'pic'" />
    </v-main>
  </v-app>
</template>

<script>
import Todo from './components/Todo.vue';
import City from './components/City.vue';
import Pic from './components/Pic.vue';

export default {
  name: "App",
  components:{
    Todo,
    City,
    Pic
  },
  data: () => ({
    drawer: false,
    page: "",
  }),
};
</script>

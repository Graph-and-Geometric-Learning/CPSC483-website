<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navigation,
    Todo
},

  data: () => ({
    //
  }),
}
</script>

<style>
ul {
    padding-left: 20px;
}

ul.bold {
  font-weight: bold;
}

</style>
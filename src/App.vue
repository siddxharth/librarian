<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
      <router-view />
    </v-main>
    <BottomNavbar />
  </v-app>
</template>

<script>

import BottomNavbar from './components/BottomNavbar.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar, BottomNavbar },
  data: () => ({
    //
  }),
};
</script>

<style>
@import url('@/assets/styles.css');
</style>

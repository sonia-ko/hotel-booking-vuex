<template>
  <app-header />
  <router-view> </router-view>
</template>

<script>
import AppHeader from "./components/general/app-header/AppHeader.vue";
import "./styles/global.css";
import "./styles/fonts.css";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  color: #2c3e50;
}
</style>

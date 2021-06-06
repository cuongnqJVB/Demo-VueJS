<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <thongtintokhai :state="message" /> -->
    <h3>Increment:</h3>
    <increment></increment>
    <h3>Counter:</h3>
    <counter></counter>
  </div>
</template>

<script>
// import thongtintokhai from "./components/HelloWorld.vue";
import Counter from "./components/CounterDisplay .vue";
import Increment from "./components/IncrementButton .vue";
import store from "./store";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  store: store,
  name: "App",
  data: function () {
    return {
      message: {
        id: 1,
        name: "hahah",
      },
    };
  },
  components: {
    // thongtintokhai,
    Counter,
    Increment,
  },
  methods: {
    getData() {
      console.log("data", this.message);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

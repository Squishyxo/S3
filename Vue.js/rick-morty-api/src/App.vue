<template>
  <FindRickButton/>
  <Card/>
</template>

<script>
import FindRickButton from "./components/FindRickButton.vue";
import Card from "./components/Card.vue";
export default {
    components:
     {
       FindRickButton,
       Card
       },
    name: "app"
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

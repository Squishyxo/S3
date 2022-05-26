<template>
<div>
<Navigation />
<leaderboard />
</div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Leaderboard from './components/Leaderboard.vue'

export default {
    components: {Navigation, Leaderboard}
  }
</script>

<style lang="scss">
:root{
  --primary-color: #1A1A1A;
  --secondary-color: #42B983;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body{
  background-color: var(--primary-color);
  color: var(--primary-color);
}
</style>
